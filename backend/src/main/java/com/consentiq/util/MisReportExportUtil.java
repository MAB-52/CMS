package com.consentiq.util;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.regex.Pattern;

/** Small helpers for MIS exports (Apache POI XSSF). */
public final class MisReportExportUtil {

    private static final Pattern PLAIN_NUMBER = Pattern.compile("^[+-]?\\d+(\\.\\d+)?$");

    private static final Pattern EXCEL_NUMBER = Pattern.compile("^-?(0|[1-9]\\d{0,13})(\\.\\d+)?$");

    private MisReportExportUtil() {}

    private static boolean startsWithFormulaChar(String v) {
        if (v.isEmpty()) {
            return false;
        }
        char c = v.charAt(0);
        return c == '=' || c == '+' || c == '-' || c == '@' || c == '\t' || c == '\r';
    }

    public static byte[] writeCsv(String headerLine, List<String[]> rows) throws IOException {
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        try (OutputStreamWriter w = new OutputStreamWriter(bos, StandardCharsets.UTF_8)) {
            w.write('﻿');
            w.write(headerLine);
            w.write('\n');
            for (String[] row : rows) {
                for (int i = 0; i < row.length; i++) {
                    if (i > 0) {
                        w.write(',');
                    }
                    w.write(csvEscape(row[i]));
                }
                w.write('\n');
            }
            w.flush();
        }
        return bos.toByteArray();
    }

    public static String csvEscape(String v) {
        if (v == null) {
            return "";
        }
        if (startsWithFormulaChar(v) && !PLAIN_NUMBER.matcher(v).matches()) {
            v = "'" + v;
        }
        boolean needsQuote = v.contains(",") || v.contains("\"") || v.contains("\n") || v.contains("\r");
        String escaped = v.replace("\"", "\"\"");
        return needsQuote ? "\"" + escaped + "\"" : escaped;
    }

    public static byte[] writeXlsx(String sheetName, List<String> headers, List<List<String>> rows) throws IOException {
        SXSSFWorkbook wb = new SXSSFWorkbook(100);
        try (wb; ByteArrayOutputStream bos = new ByteArrayOutputStream()) {
            Sheet sh = wb.createSheet(sheetName == null ? "Report" : sheetName);
            org.apache.poi.ss.usermodel.CellStyle headerStyle = wb.createCellStyle();
            org.apache.poi.ss.usermodel.Font bold = wb.createFont();
            bold.setBold(true);
            headerStyle.setFont(bold);
            int r = 0;
            Row hr = sh.createRow(r++);
            for (int c = 0; c < headers.size(); c++) {
                Cell cell = hr.createCell(c);
                cell.setCellValue(headers.get(c));
                cell.setCellStyle(headerStyle);
                sh.setColumnWidth(c, Math.min(60, Math.max(14, headers.get(c).length() + 4)) * 256);
            }
            sh.createFreezePane(0, 1);
            for (List<String> row : rows) {
                Row xr = sh.createRow(r++);
                for (int c = 0; c < row.size(); c++) {
                    Cell cell = xr.createCell(c);
                    String val = c < row.size() ? row.get(c) : "";
                    if (val != null && EXCEL_NUMBER.matcher(val).matches()) {
                        cell.setCellValue(Double.parseDouble(val));
                    } else {
                        cell.setCellValue(val == null ? "" : val);
                    }
                }
            }
            wb.write(bos);
            return bos.toByteArray();
        } finally {
            wb.dispose();
        }
    }
}
