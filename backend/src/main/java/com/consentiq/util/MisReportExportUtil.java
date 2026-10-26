package com.consentiq.util;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.nio.charset.StandardCharsets;
import java.util.List;

/** Small helpers for MIS exports (Apache POI XSSF). */
public final class MisReportExportUtil {

    private MisReportExportUtil() {}

    public static byte[] writeCsv(String headerLine, List<String[]> rows) throws IOException {
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        try (OutputStreamWriter w = new OutputStreamWriter(bos, StandardCharsets.UTF_8)) {
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
        boolean needsQuote = v.contains(",") || v.contains("\"") || v.contains("\n");
        String escaped = v.replace("\"", "\"\"");
        return needsQuote ? "\"" + escaped + "\"" : escaped;
    }

    public static byte[] writeXlsx(String sheetName, List<String> headers, List<List<String>> rows) throws IOException {
        try (XSSFWorkbook wb = new XSSFWorkbook(); ByteArrayOutputStream bos = new ByteArrayOutputStream()) {
            Sheet sh = wb.createSheet(sheetName == null ? "Report" : sheetName);
            int r = 0;
            Row hr = sh.createRow(r++);
            for (int c = 0; c < headers.size(); c++) {
                Cell cell = hr.createCell(c);
                cell.setCellValue(headers.get(c));
            }
            for (List<String> row : rows) {
                Row xr = sh.createRow(r++);
                for (int c = 0; c < row.size(); c++) {
                    Cell cell = xr.createCell(c);
                    String val = c < row.size() ? row.get(c) : "";
                    cell.setCellValue(val == null ? "" : val);
                }
            }
            wb.write(bos);
            return bos.toByteArray();
        }
    }
}
