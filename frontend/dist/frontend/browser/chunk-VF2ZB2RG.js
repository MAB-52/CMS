import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-P42KGFAL.js";
import {
  _MatInternalFormField
} from "./chunk-4UOF66IB.js";
import {
  WorkflowStatusBadgeComponent
} from "./chunk-AAN5W7BG.js";
import {
  ConsentRulesService
} from "./chunk-ZJPKKVVC.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-6CCH6DN3.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatInput,
  MatInputModule,
  MatLabel
} from "./chunk-XINNQDUF.js";
import {
  MatOption
} from "./chunk-FIYZFADG.js";
import "./chunk-ASPSHXFC.js";
import {
  ConsentService
} from "./chunk-CSLDYKDC.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  NumberValueAccessor,
  RequiredValidator
} from "./chunk-VXKP42CX.js";
import {
  AuditService
} from "./chunk-QTPUEVRL.js";
import {
  UniqueSelectionDispatcher
} from "./chunk-EJZSSRS2.js";
import "./chunk-FYNL5YUB.js";
import "./chunk-F54MANF6.js";
import "./chunk-RENR4JVC.js";
import {
  NotificationService
} from "./chunk-5EC44GU6.js";
import {
  MatAnchor,
  MatButton,
  MatButtonModule,
  MatRipple,
  MatRippleModule,
  _StructuralStylesLoader
} from "./chunk-DBZCAWGK.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-2TGCEGVP.js";
import "./chunk-23MDLYAU.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  FocusMonitor,
  HostAttributeToken,
  HttpClient,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  MatCommonModule,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  afterNextRender,
  booleanAttribute,
  catchError,
  environment,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  signal,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-SKWF3SJ6.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/@angular/material/fesm2022/radio.mjs
var _c0 = ["input"];
var _c1 = ["formField"];
var _c2 = ["*"];
var MatRadioChange = class {
  source;
  value;
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatRadioGroup),
  multi: true
};
var MAT_RADIO_GROUP = new InjectionToken("MatRadioGroup");
var MAT_RADIO_DEFAULT_OPTIONS = new InjectionToken("mat-radio-default-options", {
  providedIn: "root",
  factory: MAT_RADIO_DEFAULT_OPTIONS_FACTORY
});
function MAT_RADIO_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: "accent",
    disabledInteractive: false
  };
}
var MatRadioGroup = class _MatRadioGroup {
  _changeDetector = inject(ChangeDetectorRef);
  /** Selected value for the radio group. */
  _value = null;
  /** The HTML name attribute applied to radio buttons in this group. */
  _name = inject(_IdGenerator).getId("mat-radio-group-");
  /** The currently selected radio button. Should match value. */
  _selected = null;
  /** Whether the `value` has been set to its initial value. */
  _isInitialized = false;
  /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
  _labelPosition = "after";
  /** Whether the radio group is disabled. */
  _disabled = false;
  /** Whether the radio group is required. */
  _required = false;
  /** Subscription to changes in amount of radio buttons. */
  _buttonChanges;
  /** The method to be called in order to update ngModel */
  _controlValueAccessorChangeFn = () => {
  };
  /**
   * onTouch function registered via registerOnTouch (ControlValueAccessor).
   * @docs-private
   */
  onTouched = () => {
  };
  /**
   * Event emitted when the group value changes.
   * Change events are only emitted when the value changes due to user interaction with
   * a radio button (the same behavior as `<input type-"radio">`).
   */
  change = new EventEmitter();
  /** Child radio buttons. */
  _radios;
  /**
   * Theme color of the radio buttons in the group. This API is supported in M2
   * themes only, it has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/radio/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** Name of the radio button group. All radio buttons inside this group will use this name. */
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    this._updateRadioButtonNames();
  }
  /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */
  get labelPosition() {
    return this._labelPosition;
  }
  set labelPosition(v) {
    this._labelPosition = v === "before" ? "before" : "after";
    this._markRadiosForCheck();
  }
  /**
   * Value for the radio-group. Should equal the value of the selected radio button if there is
   * a corresponding radio button with a matching value. If there is not such a corresponding
   * radio button, this value persists to be applied in case a new radio button is added with a
   * matching value.
   */
  get value() {
    return this._value;
  }
  set value(newValue) {
    if (this._value !== newValue) {
      this._value = newValue;
      this._updateSelectedRadioFromValue();
      this._checkSelectedRadioButton();
    }
  }
  _checkSelectedRadioButton() {
    if (this._selected && !this._selected.checked) {
      this._selected.checked = true;
    }
  }
  /**
   * The currently selected radio button. If set to a new radio button, the radio group value
   * will be updated to match the new selected button.
   */
  get selected() {
    return this._selected;
  }
  set selected(selected) {
    this._selected = selected;
    this.value = selected ? selected.value : null;
    this._checkSelectedRadioButton();
  }
  /** Whether the radio group is disabled */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._markRadiosForCheck();
  }
  /** Whether the radio group is required */
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = value;
    this._markRadiosForCheck();
  }
  /** Whether buttons in the group should be interactive while they're disabled. */
  get disabledInteractive() {
    return this._disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
    this._markRadiosForCheck();
  }
  _disabledInteractive = false;
  constructor() {
  }
  /**
   * Initialize properties once content children are available.
   * This allows us to propagate relevant attributes to associated buttons.
   */
  ngAfterContentInit() {
    this._isInitialized = true;
    this._buttonChanges = this._radios.changes.subscribe(() => {
      if (this.selected && !this._radios.find((radio) => radio === this.selected)) {
        this._selected = null;
      }
    });
  }
  ngOnDestroy() {
    this._buttonChanges?.unsubscribe();
  }
  /**
   * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
   * radio buttons upon their blur.
   */
  _touch() {
    if (this.onTouched) {
      this.onTouched();
    }
  }
  _updateRadioButtonNames() {
    if (this._radios) {
      this._radios.forEach((radio) => {
        radio.name = this.name;
        radio._markForCheck();
      });
    }
  }
  /** Updates the `selected` radio button from the internal _value state. */
  _updateSelectedRadioFromValue() {
    const isAlreadySelected = this._selected !== null && this._selected.value === this._value;
    if (this._radios && !isAlreadySelected) {
      this._selected = null;
      this._radios.forEach((radio) => {
        radio.checked = this.value === radio.value;
        if (radio.checked) {
          this._selected = radio;
        }
      });
    }
  }
  /** Dispatch change event with current selection and group value. */
  _emitChangeEvent() {
    if (this._isInitialized) {
      this.change.emit(new MatRadioChange(this._selected, this._value));
    }
  }
  _markRadiosForCheck() {
    if (this._radios) {
      this._radios.forEach((radio) => radio._markForCheck());
    }
  }
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value
   */
  writeValue(value) {
    this.value = value;
    this._changeDetector.markForCheck();
  }
  /**
   * Registers a callback to be triggered when the model value changes.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  /**
   * Registers a callback to be triggered when the control is touched.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
   * @param isDisabled Whether the control should be disabled.
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetector.markForCheck();
  }
  static \u0275fac = function MatRadioGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatRadioGroup)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatRadioGroup,
    selectors: [["mat-radio-group"]],
    contentQueries: function MatRadioGroup_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatRadioButton, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._radios = _t);
      }
    },
    hostAttrs: ["role", "radiogroup", 1, "mat-mdc-radio-group"],
    inputs: {
      color: "color",
      name: "name",
      labelPosition: "labelPosition",
      value: "value",
      selected: "selected",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      required: [2, "required", "required", booleanAttribute],
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      change: "change"
    },
    exportAs: ["matRadioGroup"],
    features: [\u0275\u0275ProvidersFeature([MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
      provide: MAT_RADIO_GROUP,
      useExisting: _MatRadioGroup
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioGroup, [{
    type: Directive,
    args: [{
      selector: "mat-radio-group",
      exportAs: "matRadioGroup",
      providers: [MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, {
        provide: MAT_RADIO_GROUP,
        useExisting: MatRadioGroup
      }],
      host: {
        "role": "radiogroup",
        "class": "mat-mdc-radio-group"
      }
    }]
  }], () => [], {
    change: [{
      type: Output
    }],
    _radios: [{
      type: ContentChildren,
      args: [forwardRef(() => MatRadioButton), {
        descendants: true
      }]
    }],
    color: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatRadioButton = class _MatRadioButton {
  _elementRef = inject(ElementRef);
  _changeDetector = inject(ChangeDetectorRef);
  _focusMonitor = inject(FocusMonitor);
  _radioDispatcher = inject(UniqueSelectionDispatcher);
  _defaultOptions = inject(MAT_RADIO_DEFAULT_OPTIONS, {
    optional: true
  });
  _ngZone = inject(NgZone);
  _renderer = inject(Renderer2);
  _uniqueId = inject(_IdGenerator).getId("mat-radio-");
  _cleanupClick;
  /** The unique ID for the radio button. */
  id = this._uniqueId;
  /** Analog to HTML 'name' attribute used to group radios for unique selection. */
  name;
  /** Used to set the 'aria-label' attribute on the underlying input element. */
  ariaLabel;
  /** The 'aria-labelledby' attribute takes precedence as the element's text alternative. */
  ariaLabelledby;
  /** The 'aria-describedby' attribute is read after the element's label and field type. */
  ariaDescribedby;
  /** Whether ripples are disabled inside the radio button */
  disableRipple = false;
  /** Tabindex of the radio button. */
  tabIndex = 0;
  /** Whether this radio button is checked. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    if (this._checked !== value) {
      this._checked = value;
      if (value && this.radioGroup && this.radioGroup.value !== this.value) {
        this.radioGroup.selected = this;
      } else if (!value && this.radioGroup && this.radioGroup.value === this.value) {
        this.radioGroup.selected = null;
      }
      if (value) {
        this._radioDispatcher.notify(this.id, this.name);
      }
      this._changeDetector.markForCheck();
    }
  }
  /** The value of this radio button. */
  get value() {
    return this._value;
  }
  set value(value) {
    if (this._value !== value) {
      this._value = value;
      if (this.radioGroup !== null) {
        if (!this.checked) {
          this.checked = this.radioGroup.value === value;
        }
        if (this.checked) {
          this.radioGroup.selected = this;
        }
      }
    }
  }
  /** Whether the label should appear after or before the radio button. Defaults to 'after' */
  get labelPosition() {
    return this._labelPosition || this.radioGroup && this.radioGroup.labelPosition || "after";
  }
  set labelPosition(value) {
    this._labelPosition = value;
  }
  _labelPosition;
  /** Whether the radio button is disabled. */
  get disabled() {
    return this._disabled || this.radioGroup !== null && this.radioGroup.disabled;
  }
  set disabled(value) {
    this._setDisabled(value);
  }
  /** Whether the radio button is required. */
  get required() {
    return this._required || this.radioGroup && this.radioGroup.required;
  }
  set required(value) {
    if (value !== this._required) {
      this._changeDetector.markForCheck();
    }
    this._required = value;
  }
  /**
   * Theme color of the radio button. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/radio/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  get color() {
    return this._color || this.radioGroup && this.radioGroup.color || this._defaultOptions && this._defaultOptions.color || "accent";
  }
  set color(newValue) {
    this._color = newValue;
  }
  _color;
  /** Whether the radio button should remain interactive when it is disabled. */
  get disabledInteractive() {
    return this._disabledInteractive || this.radioGroup !== null && this.radioGroup.disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
  }
  _disabledInteractive;
  /**
   * Event emitted when the checked state of this radio button changes.
   * Change events are only emitted when the value changes due to user interaction with
   * the radio button (the same behavior as `<input type-"radio">`).
   */
  change = new EventEmitter();
  /** The parent radio group. May or may not be present. */
  radioGroup;
  /** ID of the native input element inside `<mat-radio-button>` */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  /** Whether this radio is checked. */
  _checked = false;
  /** Whether this radio is disabled. */
  _disabled;
  /** Whether this radio is required. */
  _required;
  /** Value assigned to this radio. */
  _value = null;
  /** Unregister function for _radioDispatcher */
  _removeUniqueSelectionListener = () => {
  };
  /** Previous value of the input's tabindex. */
  _previousTabIndex;
  /** The native `<input type=radio>` element */
  _inputElement;
  /** Trigger elements for the ripple events. */
  _rippleTrigger;
  /** Whether animations are disabled. */
  _noopAnimations;
  _injector = inject(Injector);
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const radioGroup = inject(MAT_RADIO_GROUP, {
      optional: true
    });
    const animationMode = inject(ANIMATION_MODULE_TYPE, {
      optional: true
    });
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    this.radioGroup = radioGroup;
    this._noopAnimations = animationMode === "NoopAnimations";
    this._disabledInteractive = this._defaultOptions?.disabledInteractive ?? false;
    if (tabIndex) {
      this.tabIndex = numberAttribute(tabIndex, 0);
    }
  }
  /** Focuses the radio button. */
  focus(options, origin) {
    if (origin) {
      this._focusMonitor.focusVia(this._inputElement, origin, options);
    } else {
      this._inputElement.nativeElement.focus(options);
    }
  }
  /**
   * Marks the radio button as needing checking for change detection.
   * This method is exposed because the parent radio group will directly
   * update bound properties of the radio button.
   */
  _markForCheck() {
    this._changeDetector.markForCheck();
  }
  ngOnInit() {
    if (this.radioGroup) {
      this.checked = this.radioGroup.value === this._value;
      if (this.checked) {
        this.radioGroup.selected = this;
      }
      this.name = this.radioGroup.name;
    }
    this._removeUniqueSelectionListener = this._radioDispatcher.listen((id, name) => {
      if (id !== this.id && name === this.name) {
        this.checked = false;
      }
    });
  }
  ngDoCheck() {
    this._updateTabIndex();
  }
  ngAfterViewInit() {
    this._updateTabIndex();
    this._focusMonitor.monitor(this._elementRef, true).subscribe((focusOrigin) => {
      if (!focusOrigin && this.radioGroup) {
        this.radioGroup._touch();
      }
    });
    this._ngZone.runOutsideAngular(() => {
      this._cleanupClick = this._renderer.listen(this._inputElement.nativeElement, "click", this._onInputClick);
    });
  }
  ngOnDestroy() {
    this._cleanupClick?.();
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._removeUniqueSelectionListener();
  }
  /** Dispatch change event with current value. */
  _emitChangeEvent() {
    this.change.emit(new MatRadioChange(this, this._value));
  }
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  /** Triggered when the radio button receives an interaction from the user. */
  _onInputInteraction(event) {
    event.stopPropagation();
    if (!this.checked && !this.disabled) {
      const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
      this.checked = true;
      this._emitChangeEvent();
      if (this.radioGroup) {
        this.radioGroup._controlValueAccessorChangeFn(this.value);
        if (groupValueChanged) {
          this.radioGroup._emitChangeEvent();
        }
      }
    }
  }
  /** Triggered when the user clicks on the touch target. */
  _onTouchTargetClick(event) {
    this._onInputInteraction(event);
    if (!this.disabled || this.disabledInteractive) {
      this._inputElement?.nativeElement.focus();
    }
  }
  /** Sets the disabled state and marks for check if a change occurred. */
  _setDisabled(value) {
    if (this._disabled !== value) {
      this._disabled = value;
      this._changeDetector.markForCheck();
    }
  }
  /** Called when the input is clicked. */
  _onInputClick = (event) => {
    if (this.disabled && this.disabledInteractive) {
      event.preventDefault();
    }
  };
  /** Gets the tabindex for the underlying input element. */
  _updateTabIndex() {
    const group = this.radioGroup;
    let value;
    if (!group || !group.selected || this.disabled) {
      value = this.tabIndex;
    } else {
      value = group.selected === this ? this.tabIndex : -1;
    }
    if (value !== this._previousTabIndex) {
      const input = this._inputElement?.nativeElement;
      if (input) {
        input.setAttribute("tabindex", value + "");
        this._previousTabIndex = value;
        afterNextRender(() => {
          queueMicrotask(() => {
            if (group && group.selected && group.selected !== this && document.activeElement === input) {
              group.selected?._inputElement.nativeElement.focus();
              if (document.activeElement === input) {
                this._inputElement.nativeElement.blur();
              }
            }
          });
        }, {
          injector: this._injector
        });
      }
    }
  }
  static \u0275fac = function MatRadioButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatRadioButton)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatRadioButton,
    selectors: [["mat-radio-button"]],
    viewQuery: function MatRadioButton_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 7, ElementRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._rippleTrigger = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-radio-button"],
    hostVars: 19,
    hostBindings: function MatRadioButton_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focus", function MatRadioButton_focus_HostBindingHandler() {
          return ctx._inputElement.nativeElement.focus();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id)("tabindex", null)("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
        \u0275\u0275classProp("mat-primary", ctx.color === "primary")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("mat-mdc-radio-checked", ctx.checked)("mat-mdc-radio-disabled", ctx.disabled)("mat-mdc-radio-disabled-interactive", ctx.disabledInteractive)("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      id: "id",
      name: "name",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
      checked: [2, "checked", "checked", booleanAttribute],
      value: "value",
      labelPosition: "labelPosition",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      required: [2, "required", "required", booleanAttribute],
      color: "color",
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      change: "change"
    },
    exportAs: ["matRadioButton"],
    ngContentSelectors: _c2,
    decls: 13,
    vars: 17,
    consts: [["formField", ""], ["input", ""], ["mat-internal-form-field", "", 3, "labelPosition"], [1, "mdc-radio"], [1, "mat-mdc-radio-touch-target", 3, "click"], ["type", "radio", "aria-invalid", "false", 1, "mdc-radio__native-control", 3, "change", "id", "checked", "disabled", "required"], [1, "mdc-radio__background"], [1, "mdc-radio__outer-circle"], [1, "mdc-radio__inner-circle"], ["mat-ripple", "", 1, "mat-radio-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mat-ripple-element", "mat-radio-persistent-ripple"], [1, "mdc-label", 3, "for"]],
    template: function MatRadioButton_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 2, 0)(2, "div", 3)(3, "div", 4);
        \u0275\u0275listener("click", function MatRadioButton_Template_div_click_3_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._onTouchTargetClick($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "input", 5, 1);
        \u0275\u0275listener("change", function MatRadioButton_Template_input_change_4_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._onInputInteraction($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 6);
        \u0275\u0275element(7, "div", 7)(8, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 9);
        \u0275\u0275element(10, "div", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "label", 11);
        \u0275\u0275projection(12);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("labelPosition", ctx.labelPosition);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("mdc-radio--disabled", ctx.disabled);
        \u0275\u0275advance(2);
        \u0275\u0275property("id", ctx.inputId)("checked", ctx.checked)("disabled", ctx.disabled && !ctx.disabledInteractive)("required", ctx.required);
        \u0275\u0275attribute("name", ctx.name)("value", ctx.value)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
        \u0275\u0275advance(5);
        \u0275\u0275property("matRippleTrigger", ctx._rippleTrigger.nativeElement)("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("for", ctx.inputId);
      }
    },
    dependencies: [MatRipple, _MatInternalFormField],
    styles: ['.mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mdc-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:not([disabled])~.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-radio-button .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mdc-radio-state-layer-size, 40px);height:var(--mdc-radio-state-layer-size, 40px);top:calc(-1*(var(--mdc-radio-state-layer-size, 40px) - 20px)/2);left:calc(-1*(var(--mdc-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-radio-button .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mdc-radio-state-layer-size, 40px);height:var(--mdc-radio-state-layer-size, 40px)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled{pointer-events:auto}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color, var(--mat-sys-primary))}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mat-internal-form-field{color:var(--mat-radio-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple>.mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button .mdc-radio>.mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before{content:""}.mat-mdc-radio-disabled{cursor:default;pointer-events:none}.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive{pointer-events:auto}.mat-mdc-radio-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display, block)}[dir=rtl] .mat-mdc-radio-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioButton, [{
    type: Component,
    args: [{
      selector: "mat-radio-button",
      host: {
        "class": "mat-mdc-radio-button",
        "[attr.id]": "id",
        "[class.mat-primary]": 'color === "primary"',
        "[class.mat-accent]": 'color === "accent"',
        "[class.mat-warn]": 'color === "warn"',
        "[class.mat-mdc-radio-checked]": "checked",
        "[class.mat-mdc-radio-disabled]": "disabled",
        "[class.mat-mdc-radio-disabled-interactive]": "disabledInteractive",
        "[class._mat-animation-noopable]": "_noopAnimations",
        // Needs to be removed since it causes some a11y issues (see #21266).
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.aria-describedby]": "null",
        // Note: under normal conditions focus shouldn't land on this element, however it may be
        // programmatically set, for example inside of a focus trap, in this case we want to forward
        // the focus to the native element.
        "(focus)": "_inputElement.nativeElement.focus()"
      },
      exportAs: "matRadioButton",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatRipple, _MatInternalFormField],
      template: '<div mat-internal-form-field [labelPosition]="labelPosition" #formField>\n  <div class="mdc-radio" [class.mdc-radio--disabled]="disabled">\n    <!-- Render this element first so the input is on top. -->\n    <div class="mat-mdc-radio-touch-target" (click)="_onTouchTargetClick($event)"></div>\n    <!--\n      Note that we set `aria-invalid="false"` on the input, because otherwise some screen readers\n      will read out "required, invalid data" for each radio button that hasn\'t been checked.\n      An alternate approach is to use `aria-required` instead of `required`, however we have an\n      internal check which enforces that elements marked as `aria-required` also have the `required`\n      attribute which ends up re-introducing the issue for us.\n    -->\n    <input #input class="mdc-radio__native-control" type="radio"\n           [id]="inputId"\n           [checked]="checked"\n           [disabled]="disabled && !disabledInteractive"\n           [attr.name]="name"\n           [attr.value]="value"\n           [required]="required"\n           aria-invalid="false"\n           [attr.aria-label]="ariaLabel"\n           [attr.aria-labelledby]="ariaLabelledby"\n           [attr.aria-describedby]="ariaDescribedby"\n           [attr.aria-disabled]="disabled && disabledInteractive ? \'true\' : null"\n           (change)="_onInputInteraction($event)">\n    <div class="mdc-radio__background">\n      <div class="mdc-radio__outer-circle"></div>\n      <div class="mdc-radio__inner-circle"></div>\n    </div>\n    <div mat-ripple class="mat-radio-ripple mat-focus-indicator"\n         [matRippleTrigger]="_rippleTrigger.nativeElement"\n         [matRippleDisabled]="_isRippleDisabled()"\n         [matRippleCentered]="true">\n      <div class="mat-ripple-element mat-radio-persistent-ripple"></div>\n    </div>\n  </div>\n  <label class="mdc-label" [for]="inputId">\n    <ng-content></ng-content>\n  </label>\n</div>\n',
      styles: ['.mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mdc-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:not([disabled])~.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:hover>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:active>.mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-radio-button .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mdc-radio-state-layer-size, 40px);height:var(--mdc-radio-state-layer-size, 40px);top:calc(-1*(var(--mdc-radio-state-layer-size, 40px) - 20px)/2);left:calc(-1*(var(--mdc-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-radio-button .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mdc-radio-state-layer-size, 40px);height:var(--mdc-radio-state-layer-size, 40px)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color, var(--mat-sys-primary))}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled{pointer-events:auto}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color, var(--mat-sys-primary))}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button .mat-internal-form-field{color:var(--mat-radio-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-radio-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-radio-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-radio-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-radio-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-radio-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple>.mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button .mdc-radio>.mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before{content:""}.mat-mdc-radio-disabled{cursor:default;pointer-events:none}.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive{pointer-events:auto}.mat-mdc-radio-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display, block)}[dir=rtl] .mat-mdc-radio-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}\n']
    }]
  }], () => [], {
    id: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }],
    _rippleTrigger: [{
      type: ViewChild,
      args: ["formField", {
        read: ElementRef,
        static: true
      }]
    }]
  });
})();
var MatRadioModule = class _MatRadioModule {
  static \u0275fac = function MatRadioModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatRadioModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatRadioModule,
    imports: [MatCommonModule, MatRippleModule, MatRadioGroup, MatRadioButton],
    exports: [MatCommonModule, MatRadioGroup, MatRadioButton]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, MatRippleModule, MatRadioButton, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRadioModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatRippleModule, MatRadioGroup, MatRadioButton],
      exports: [MatCommonModule, MatRadioGroup, MatRadioButton]
    }]
  }], null, null);
})();

// src/app/core/services/segments.service.ts
var SegmentsService = class _SegmentsService {
  constructor() {
    this.http = inject(HttpClient);
    this.notify = inject(NotificationService);
  }
  list() {
    return this.http.get(`${environment.apiUrl}/segments`).pipe(catchError((err) => {
      this.notify.error("Segments", err.error?.message || "Failed to load audience segments.");
      return throwError(() => err);
    }));
  }
  static {
    this.\u0275fac = function SegmentsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SegmentsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SegmentsService, factory: _SegmentsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SegmentsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/shared/utils/recurring-cron.util.ts
var QUARTERLY_MONTHS = "1,4,7,10";
function clamp(n, lo, hi) {
  return Math.min(hi, Math.max(lo, n));
}
function normalizeCronWhitespace(cron) {
  return cron.trim().replace(/\s+/g, " ");
}
var WEEKDAY_OPTIONS = [
  { label: "Monday", dow: 1 },
  { label: "Tuesday", dow: 2 },
  { label: "Wednesday", dow: 3 },
  { label: "Thursday", dow: 4 },
  { label: "Friday", dow: 5 },
  { label: "Saturday", dow: 6 },
  { label: "Sunday", dow: 0 }
];
function buildSpringRecurringCron(input) {
  const minute = clamp(Math.floor(input.minute), 0, 59);
  const hour = clamp(Math.floor(input.hour), 0, 23);
  switch (input.frequency) {
    case "DAILY":
      return `0 ${minute} ${hour} * * *`;
    case "WEEKLY": {
      const days = [...new Set(input.weekDays.map((d) => clamp(Math.floor(d), 0, 6)))].sort((a, b) => a - b);
      if (days.length === 0) {
        return null;
      }
      return `0 ${minute} ${hour} * * ${days.join(",")}`;
    }
    case "MONTHLY": {
      const dom = clamp(Math.floor(input.dayOfMonth), 1, 28);
      return `0 ${minute} ${hour} ${dom} * *`;
    }
    case "QUARTERLY": {
      const dom = clamp(Math.floor(input.dayOfMonth), 1, 28);
      return `0 ${minute} ${hour} ${dom} ${QUARTERLY_MONTHS} *`;
    }
    case "YEARLY": {
      const dom = clamp(Math.floor(input.dayOfMonth), 1, 28);
      const month = clamp(Math.floor(input.month), 1, 12);
      return `0 ${minute} ${hour} ${dom} ${month} *`;
    }
    default:
      return null;
  }
}
function parseIntStrict(s) {
  const n = Number.parseInt(s, 10);
  return Number.isFinite(n) ? n : null;
}
function parseKnownRecurringCron(cronRaw) {
  const cron = normalizeCronWhitespace(cronRaw);
  if (!cron) {
    return { known: false, raw: cronRaw };
  }
  const daily = /^0 (\d{1,2}) (\d{1,2}) \* \* \*$/.exec(cron);
  if (daily) {
    const minute = parseIntStrict(daily[1]);
    const hour = parseIntStrict(daily[2]);
    if (minute !== null && hour !== null && minute >= 0 && minute <= 59 && hour >= 0 && hour <= 23) {
      return { known: true, frequency: "DAILY", minute, hour };
    }
  }
  const weekly = /^0 (\d{1,2}) (\d{1,2}) \* \* ([\d,\s]+)$/.exec(cron);
  if (weekly) {
    const minute = parseIntStrict(weekly[1]);
    const hour = parseIntStrict(weekly[2]);
    const parts = weekly[3].split(",").map((x) => x.trim()).filter(Boolean);
    const days = parts.map((p) => parseIntStrict(p)).filter((n) => n !== null && n >= 0 && n <= 6);
    if (minute !== null && hour !== null && minute >= 0 && minute <= 59 && hour >= 0 && hour <= 23 && days.length === parts.length && days.length > 0) {
      return { known: true, frequency: "WEEKLY", minute, hour, weekDays: [...new Set(days)].sort((a, b) => a - b) };
    }
  }
  const monthly = /^0 (\d{1,2}) (\d{1,2}) (\d{1,2}) \* \*$/.exec(cron);
  if (monthly) {
    const minute = parseIntStrict(monthly[1]);
    const hour = parseIntStrict(monthly[2]);
    const dom = parseIntStrict(monthly[3]);
    if (minute !== null && hour !== null && dom !== null && minute >= 0 && minute <= 59 && hour >= 0 && hour <= 23 && dom >= 1 && dom <= 28) {
      return { known: true, frequency: "MONTHLY", minute, hour, dayOfMonth: dom };
    }
  }
  const quarterly = /^0 (\d{1,2}) (\d{1,2}) (\d{1,2}) 1\s*,\s*4\s*,\s*7\s*,\s*10 \*$/.exec(cron);
  if (quarterly) {
    const minute = parseIntStrict(quarterly[1]);
    const hour = parseIntStrict(quarterly[2]);
    const dom = parseIntStrict(quarterly[3]);
    if (minute !== null && hour !== null && dom !== null && minute >= 0 && minute <= 59 && hour >= 0 && hour <= 23 && dom >= 1 && dom <= 28) {
      return { known: true, frequency: "QUARTERLY", minute, hour, dayOfMonth: dom };
    }
  }
  const yearly = /^0 (\d{1,2}) (\d{1,2}) (\d{1,2}) (\d{1,2}) \*$/.exec(cron);
  if (yearly) {
    const minute = parseIntStrict(yearly[1]);
    const hour = parseIntStrict(yearly[2]);
    const dom = parseIntStrict(yearly[3]);
    const month = parseIntStrict(yearly[4]);
    if (minute !== null && hour !== null && dom !== null && month !== null && minute >= 0 && minute <= 59 && hour >= 0 && hour <= 23 && dom >= 1 && dom <= 28 && month >= 1 && month <= 12) {
      return { known: true, frequency: "YEARLY", minute, hour, dayOfMonth: dom, month };
    }
  }
  return { known: false, raw: cronRaw };
}
var MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
function dowLabel(d) {
  const row = WEEKDAY_OPTIONS.find((w) => w.dow === d);
  return row?.label ?? String(d);
}
function describeParsedCron(p) {
  const hm = `${String(p.hour).padStart(2, "0")}:${String(p.minute).padStart(2, "0")}`;
  switch (p.frequency) {
    case "DAILY":
      return `Every day at ${hm}`;
    case "WEEKLY": {
      const labels = (p.weekDays ?? []).slice().sort((a, b) => a - b).map(dowLabel);
      return `Every week on ${labels.join(", ")} at ${hm}`;
    }
    case "MONTHLY":
      return `Every month on day ${p.dayOfMonth} at ${hm}`;
    case "QUARTERLY":
      return `Every quarter on day ${p.dayOfMonth} at ${hm} (January, April, July, October)`;
    case "YEARLY": {
      const m = p.month != null ? MONTH_NAMES[p.month - 1] : "";
      return `Every year on ${m} ${p.dayOfMonth} at ${hm}`;
    }
    default:
      return "Recurring schedule";
  }
}

// src/app/shared/components/recurring-schedule-editor/recurring-schedule-editor.component.ts
var _forTrack0 = ($index, $item) => $item.dow;
var _forTrack1 = ($index, $item) => $item.value;
function RecurringScheduleEditorComponent_Conditional_1_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r3 = ctx.$implicit;
    \u0275\u0275property("value", h_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(h_r3);
  }
}
function RecurringScheduleEditorComponent_Conditional_1_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    \u0275\u0275property("value", m_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r4);
  }
}
function RecurringScheduleEditorComponent_Conditional_1_Conditional_27_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 18);
    \u0275\u0275listener("change", function RecurringScheduleEditorComponent_Conditional_1_Conditional_27_For_4_Template_mat_checkbox_change_0_listener($event) {
      const d_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleDay(d_r6.dow, $event.checked));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("checked", ctx_r1.dayChecked(d_r6.dow))("disabled", ctx_r1.disabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r6.label);
  }
}
function RecurringScheduleEditorComponent_Conditional_1_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "Days of week");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 16);
    \u0275\u0275repeaterCreate(3, RecurringScheduleEditorComponent_Conditional_1_Conditional_27_For_4_Template, 2, 3, "mat-checkbox", 17, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.weekdayOptions);
  }
}
function RecurringScheduleEditorComponent_Conditional_1_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 1)(1, "mat-label");
    \u0275\u0275text(2, "Day of month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function RecurringScheduleEditorComponent_Conditional_1_Conditional_28_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.dayOfMonth, $event) || (ctx_r1.dayOfMonth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RecurringScheduleEditorComponent_Conditional_1_Conditional_28_Template_input_ngModelChange_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFieldChanged());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-hint");
    \u0275\u0275text(5, "1\u201328");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.dayOfMonth);
    \u0275\u0275property("disabled", ctx_r1.disabled);
  }
}
function RecurringScheduleEditorComponent_Conditional_1_Conditional_29_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r9 = ctx.$implicit;
    \u0275\u0275property("value", m_r9.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r9.label);
  }
}
function RecurringScheduleEditorComponent_Conditional_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 1)(1, "mat-label");
    \u0275\u0275text(2, "Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-select", 20);
    \u0275\u0275twoWayListener("ngModelChange", function RecurringScheduleEditorComponent_Conditional_1_Conditional_29_Template_mat_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.month, $event) || (ctx_r1.month = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RecurringScheduleEditorComponent_Conditional_1_Conditional_29_Template_mat_select_ngModelChange_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFieldChanged());
    });
    \u0275\u0275repeaterCreate(4, RecurringScheduleEditorComponent_Conditional_1_Conditional_29_For_5_Template, 2, 2, "mat-option", 11, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.month);
    \u0275\u0275property("disabled", ctx_r1.disabled);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.months);
  }
}
function RecurringScheduleEditorComponent_Conditional_1_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, " This schedule runs on the chosen day in January, April, July, and October. ");
    \u0275\u0275elementEnd();
  }
}
function RecurringScheduleEditorComponent_Conditional_1_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14)(1, "span", 21);
    \u0275\u0275text(2, "This schedule will run:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx, "");
  }
}
function RecurringScheduleEditorComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 1)(1, "mat-label");
    \u0275\u0275text(2, "Frequency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-select", 2);
    \u0275\u0275twoWayListener("ngModelChange", function RecurringScheduleEditorComponent_Conditional_1_Template_mat_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.frequency, $event) || (ctx_r1.frequency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RecurringScheduleEditorComponent_Conditional_1_Template_mat_select_ngModelChange_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFrequencyChange());
    });
    \u0275\u0275elementStart(4, "mat-option", 3);
    \u0275\u0275text(5, "Daily");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-option", 4);
    \u0275\u0275text(7, "Weekly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-option", 5);
    \u0275\u0275text(9, "Monthly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-option", 6);
    \u0275\u0275text(11, "Quarterly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-option", 7);
    \u0275\u0275text(13, "Yearly");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 8)(15, "mat-form-field", 9)(16, "mat-label");
    \u0275\u0275text(17, "Hour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-select", 10);
    \u0275\u0275twoWayListener("ngModelChange", function RecurringScheduleEditorComponent_Conditional_1_Template_mat_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.hour, $event) || (ctx_r1.hour = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RecurringScheduleEditorComponent_Conditional_1_Template_mat_select_ngModelChange_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFieldChanged());
    });
    \u0275\u0275repeaterCreate(19, RecurringScheduleEditorComponent_Conditional_1_For_20_Template, 2, 2, "mat-option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "mat-form-field", 9)(22, "mat-label");
    \u0275\u0275text(23, "Minute");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function RecurringScheduleEditorComponent_Conditional_1_Template_mat_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.minute, $event) || (ctx_r1.minute = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RecurringScheduleEditorComponent_Conditional_1_Template_mat_select_ngModelChange_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFieldChanged());
    });
    \u0275\u0275repeaterCreate(25, RecurringScheduleEditorComponent_Conditional_1_For_26_Template, 2, 2, "mat-option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(27, RecurringScheduleEditorComponent_Conditional_1_Conditional_27_Template, 5, 0)(28, RecurringScheduleEditorComponent_Conditional_1_Conditional_28_Template, 6, 2, "mat-form-field", 1)(29, RecurringScheduleEditorComponent_Conditional_1_Conditional_29_Template, 6, 2, "mat-form-field", 1)(30, RecurringScheduleEditorComponent_Conditional_1_Conditional_30_Template, 2, 0, "p", 13)(31, RecurringScheduleEditorComponent_Conditional_1_Conditional_31_Template, 4, 1, "p", 14);
  }
  if (rf & 2) {
    let tmp_13_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.frequency);
    \u0275\u0275property("disabled", ctx_r1.disabled);
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.hour);
    \u0275\u0275property("disabled", ctx_r1.disabled);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.hours);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.minute);
    \u0275\u0275property("disabled", ctx_r1.disabled);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.minutes);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.frequency === "WEEKLY" ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.frequency === "MONTHLY" || ctx_r1.frequency === "QUARTERLY" || ctx_r1.frequency === "YEARLY" ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.frequency === "YEARLY" ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.frequency === "QUARTERLY" ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_13_0 = ctx_r1.previewText()) ? 31 : -1, tmp_13_0);
  }
}
function RecurringScheduleEditorComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, " This cron was set externally and cannot be parsed into simple options. Edit the expression below or switch options after clearing it. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-form-field", 1)(3, "mat-label");
    \u0275\u0275text(4, "Cron expression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "textarea", 23);
    \u0275\u0275twoWayListener("ngModelChange", function RecurringScheduleEditorComponent_Conditional_2_Template_textarea_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.externalCronRaw, $event) || (ctx_r1.externalCronRaw = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RecurringScheduleEditorComponent_Conditional_2_Template_textarea_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onExternalCronChange());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.externalCronRaw);
    \u0275\u0275property("disabled", ctx_r1.disabled);
  }
}
var RecurringScheduleEditorComponent = class _RecurringScheduleEditorComponent {
  constructor() {
    this.recurringCron = "";
    this.disabled = false;
    this.recurringCronChange = new EventEmitter();
    this.scheduleValidChange = new EventEmitter();
    this.weekdayOptions = WEEKDAY_OPTIONS;
    this.hours = Array.from({ length: 24 }, (_, i) => i);
    this.minutes = Array.from({ length: 60 }, (_, i) => i);
    this.months = MONTH_NAMES.map((label, i) => ({ value: i + 1, label }));
    this.frequency = "DAILY";
    this.hour = 9;
    this.minute = 0;
    this.dayOfMonth = 1;
    this.month = 1;
    this.weekDays = {
      0: false,
      1: true,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false
    };
    this.externalMode = false;
    this.externalCronRaw = "";
  }
  ngOnChanges(changes) {
    if (changes["recurringCron"]) {
      this.ingestCron(this.recurringCron ?? "");
    }
  }
  previewText() {
    if (this.externalMode) {
      return null;
    }
    const built = this.tryBuildCron();
    if (!built) {
      return null;
    }
    const p = parseKnownRecurringCron(built);
    return p.known ? describeParsedCron(p) : null;
  }
  onFrequencyChange() {
    if (this.frequency === "WEEKLY" && !this.selectedWeekDays().length) {
      this.weekDays = { 0: false, 1: true, 2: false, 3: false, 4: false, 5: false, 6: false };
    }
    this.pushCronFromFields();
  }
  onFieldChanged() {
    this.pushCronFromFields();
  }
  toggleDay(dow, checked) {
    this.weekDays = __spreadProps(__spreadValues({}, this.weekDays), { [dow]: checked });
    this.pushCronFromFields();
  }
  dayChecked(dow) {
    return !!this.weekDays[dow];
  }
  onExternalCronChange() {
    const t = this.externalCronRaw.trim();
    this.recurringCronChange.emit(t);
    this.scheduleValidChange.emit(t.length > 0);
  }
  ingestCron(raw) {
    const trimmed = raw.trim();
    if (!trimmed) {
      this.externalMode = false;
      this.frequency = "DAILY";
      this.hour = 9;
      this.minute = 0;
      this.dayOfMonth = 1;
      this.month = 1;
      this.weekDays = { 0: false, 1: true, 2: false, 3: false, 4: false, 5: false, 6: false };
      this.pushCronFromFields();
      return;
    }
    const parsed = parseKnownRecurringCron(trimmed);
    if (!parsed.known) {
      this.externalMode = true;
      this.externalCronRaw = raw;
      this.scheduleValidChange.emit(trimmed.length > 0);
      return;
    }
    this.externalMode = false;
    this.applyParsed(parsed);
    this.pushCronFromFields();
  }
  applyParsed(p) {
    this.frequency = p.frequency;
    this.hour = p.hour;
    this.minute = p.minute;
    if (p.dayOfMonth != null) {
      this.dayOfMonth = p.dayOfMonth;
    }
    if (p.month != null) {
      this.month = p.month;
    }
    if (p.frequency === "WEEKLY" && p.weekDays?.length) {
      const wd = { 0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false };
      for (const d of p.weekDays) {
        wd[d] = true;
      }
      this.weekDays = wd;
    }
  }
  selectedWeekDays() {
    return Object.entries(this.weekDays).filter(([, on]) => on).map(([d]) => Number(d));
  }
  buildInput() {
    switch (this.frequency) {
      case "DAILY":
        return { frequency: "DAILY", hour: this.hour, minute: this.minute };
      case "WEEKLY":
        return { frequency: "WEEKLY", hour: this.hour, minute: this.minute, weekDays: this.selectedWeekDays() };
      case "MONTHLY":
        return { frequency: "MONTHLY", hour: this.hour, minute: this.minute, dayOfMonth: this.dayOfMonth };
      case "QUARTERLY":
        return { frequency: "QUARTERLY", hour: this.hour, minute: this.minute, dayOfMonth: this.dayOfMonth };
      case "YEARLY":
        return {
          frequency: "YEARLY",
          hour: this.hour,
          minute: this.minute,
          dayOfMonth: this.dayOfMonth,
          month: this.month
        };
    }
  }
  tryBuildCron() {
    return buildSpringRecurringCron(this.buildInput());
  }
  pushCronFromFields() {
    if (this.externalMode) {
      return;
    }
    const built = this.tryBuildCron();
    this.recurringCronChange.emit(built ?? "");
    this.scheduleValidChange.emit(built !== null);
  }
  static {
    this.\u0275fac = function RecurringScheduleEditorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RecurringScheduleEditorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecurringScheduleEditorComponent, selectors: [["app-recurring-schedule-editor"]], inputs: { recurringCron: "recurringCron", disabled: "disabled" }, outputs: { recurringCronChange: "recurringCronChange", scheduleValidChange: "scheduleValidChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 3, vars: 1, consts: [[1, "recurring-editor"], ["appearance", "outline", 1, "full"], ["name", "recFreq", 3, "ngModelChange", "ngModel", "disabled"], ["value", "DAILY"], ["value", "WEEKLY"], ["value", "MONTHLY"], ["value", "QUARTERLY"], ["value", "YEARLY"], [1, "time-row"], ["appearance", "outline"], ["name", "recHr", 3, "ngModelChange", "ngModel", "disabled"], [3, "value"], ["name", "recMin", 3, "ngModelChange", "ngModel", "disabled"], [1, "info"], [1, "preview"], [1, "section-label"], [1, "dow-grid"], [3, "checked", "disabled"], [3, "change", "checked", "disabled"], ["matInput", "", "type", "number", "name", "recDom", "min", "1", "max", "28", 3, "ngModelChange", "ngModel", "disabled"], ["name", "recMon", 3, "ngModelChange", "ngModel", "disabled"], [1, "preview-label"], [1, "alert", "warn"], ["matInput", "", "rows", "2", "name", "recExtCron", 3, "ngModelChange", "ngModel", "disabled"]], template: function RecurringScheduleEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, RecurringScheduleEditorComponent_Conditional_1_Template, 32, 11)(2, RecurringScheduleEditorComponent_Conditional_2_Template, 6, 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.externalMode ? 1 : 2);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, MatFormFieldModule, MatFormField, MatLabel, MatHint, MatSelectModule, MatSelect, MatOption, MatInputModule, MatInput, MatCheckboxModule, MatCheckbox], styles: ["\n\n.recurring-editor[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.time-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.section-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  margin-top: 4px;\n}\n.dow-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px 16px;\n}\n.info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #444;\n  margin: 0;\n}\n.preview[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin: 0;\n  padding: 8px 12px;\n  background: #f5f7fa;\n  border-radius: 6px;\n}\n.preview-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.alert.warn[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border-radius: 6px;\n  background: #fff8e6;\n  border: 1px solid #f0d090;\n  font-size: 13px;\n}\n/*# sourceMappingURL=recurring-schedule-editor.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecurringScheduleEditorComponent, [{
    type: Component,
    args: [{ selector: "app-recurring-schedule-editor", standalone: true, imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatCheckboxModule], template: `<div class="recurring-editor">\r
  @if (!externalMode) {\r
    <mat-form-field appearance="outline" class="full">\r
      <mat-label>Frequency</mat-label>\r
      <mat-select\r
        name="recFreq"\r
        [(ngModel)]="frequency"\r
        [disabled]="disabled"\r
        (ngModelChange)="onFrequencyChange()"\r
      >\r
        <mat-option value="DAILY">Daily</mat-option>\r
        <mat-option value="WEEKLY">Weekly</mat-option>\r
        <mat-option value="MONTHLY">Monthly</mat-option>\r
        <mat-option value="QUARTERLY">Quarterly</mat-option>\r
        <mat-option value="YEARLY">Yearly</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
\r
    <div class="time-row">\r
      <mat-form-field appearance="outline">\r
        <mat-label>Hour</mat-label>\r
        <mat-select name="recHr" [(ngModel)]="hour" [disabled]="disabled" (ngModelChange)="onFieldChanged()">\r
          @for (h of hours; track h) {\r
            <mat-option [value]="h">{{ h }}</mat-option>\r
          }\r
        </mat-select>\r
      </mat-form-field>\r
      <mat-form-field appearance="outline">\r
        <mat-label>Minute</mat-label>\r
        <mat-select name="recMin" [(ngModel)]="minute" [disabled]="disabled" (ngModelChange)="onFieldChanged()">\r
          @for (m of minutes; track m) {\r
            <mat-option [value]="m">{{ m }}</mat-option>\r
          }\r
        </mat-select>\r
      </mat-form-field>\r
    </div>\r
\r
    @if (frequency === 'WEEKLY') {\r
      <div class="section-label">Days of week</div>\r
      <div class="dow-grid">\r
        @for (d of weekdayOptions; track d.dow) {\r
          <mat-checkbox\r
            [checked]="dayChecked(d.dow)"\r
            [disabled]="disabled"\r
            (change)="toggleDay(d.dow, $event.checked)"\r
            >{{ d.label }}</mat-checkbox\r
          >\r
        }\r
      </div>\r
    }\r
\r
    @if (frequency === 'MONTHLY' || frequency === 'QUARTERLY' || frequency === 'YEARLY') {\r
      <mat-form-field appearance="outline" class="full">\r
        <mat-label>Day of month</mat-label>\r
        <input\r
          matInput\r
          type="number"\r
          name="recDom"\r
          min="1"\r
          max="28"\r
          [(ngModel)]="dayOfMonth"\r
          [disabled]="disabled"\r
          (ngModelChange)="onFieldChanged()"\r
        />\r
        <mat-hint>1\u201328</mat-hint>\r
      </mat-form-field>\r
    }\r
\r
    @if (frequency === 'YEARLY') {\r
      <mat-form-field appearance="outline" class="full">\r
        <mat-label>Month</mat-label>\r
        <mat-select name="recMon" [(ngModel)]="month" [disabled]="disabled" (ngModelChange)="onFieldChanged()">\r
          @for (m of months; track m.value) {\r
            <mat-option [value]="m.value">{{ m.label }}</mat-option>\r
          }\r
        </mat-select>\r
      </mat-form-field>\r
    }\r
\r
    @if (frequency === 'QUARTERLY') {\r
      <p class="info">\r
        This schedule runs on the chosen day in January, April, July, and October.\r
      </p>\r
    }\r
\r
    @if (previewText(); as prev) {\r
      <p class="preview"><span class="preview-label">This schedule will run:</span> {{ prev }}</p>\r
    }\r
  } @else {\r
    <div class="alert warn">\r
      This cron was set externally and cannot be parsed into simple options. Edit the expression below or switch options\r
      after clearing it.\r
    </div>\r
    <mat-form-field appearance="outline" class="full">\r
      <mat-label>Cron expression</mat-label>\r
      <textarea\r
        matInput\r
        rows="2"\r
        name="recExtCron"\r
        [(ngModel)]="externalCronRaw"\r
        [disabled]="disabled"\r
        (ngModelChange)="onExternalCronChange()"\r
      ></textarea>\r
    </mat-form-field>\r
  }\r
</div>\r
`, styles: ["/* src/app/shared/components/recurring-schedule-editor/recurring-schedule-editor.component.scss */\n.recurring-editor {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.full {\n  width: 100%;\n}\n.time-row {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.section-label {\n  font-size: 13px;\n  font-weight: 600;\n  margin-top: 4px;\n}\n.dow-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px 16px;\n}\n.info {\n  font-size: 13px;\n  color: #444;\n  margin: 0;\n}\n.preview {\n  font-size: 13px;\n  margin: 0;\n  padding: 8px 12px;\n  background: #f5f7fa;\n  border-radius: 6px;\n}\n.preview-label {\n  font-weight: 600;\n}\n.alert.warn {\n  padding: 10px 12px;\n  border-radius: 6px;\n  background: #fff8e6;\n  border: 1px solid #f0d090;\n  font-size: 13px;\n}\n/*# sourceMappingURL=recurring-schedule-editor.component.css.map */\n"] }]
  }], null, { recurringCron: [{
    type: Input
  }], disabled: [{
    type: Input
  }], recurringCronChange: [{
    type: Output
  }], scheduleValidChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecurringScheduleEditorComponent, { className: "RecurringScheduleEditorComponent", filePath: "src/app/shared/components/recurring-schedule-editor/recurring-schedule-editor.component.ts", lineNumber: 25 });
})();

// src/app/features/maker/maker-rule-edit/maker-rule-edit.component.ts
var _forTrack02 = ($index, $item) => $item.code;
var _forTrack12 = ($index, $item) => $item.id;
function MakerRuleEditComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "h1");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "app-workflow-status-badge", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = ctx;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.ruleName);
    \u0275\u0275advance();
    \u0275\u0275property("status", r_r2.status);
  }
}
function MakerRuleEditComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.isNew() ? "New rule" : "Edit rule");
  }
}
function MakerRuleEditComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx);
  }
}
function MakerRuleEditComponent_Conditional_27_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sc_r5 = ctx.$implicit;
    \u0275\u0275property("value", sc_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sc_r5);
  }
}
function MakerRuleEditComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 16)(1, "mat-label");
    \u0275\u0275text(2, "Scenario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-select", 35);
    \u0275\u0275twoWayListener("ngModelChange", function MakerRuleEditComponent_Conditional_27_Template_mat_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.predefinedScenario, $event) || (ctx_r2.form.predefinedScenario = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(4, MakerRuleEditComponent_Conditional_27_For_5_Template, 2, 2, "mat-option", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.predefinedScenario);
    \u0275\u0275property("disabled", !ctx_r2.canEdit());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.scenarios);
  }
}
function MakerRuleEditComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 16)(1, "mat-label");
    \u0275\u0275text(2, "Trigger / event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function MakerRuleEditComponent_Conditional_28_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.triggerEvent, $event) || (ctx_r2.form.triggerEvent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.triggerEvent);
    \u0275\u0275property("disabled", !ctx_r2.canEdit());
  }
}
function MakerRuleEditComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    \u0275\u0275property("value", s_r7.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", s_r7.label, " (", s_r7.customerCount, ")");
  }
}
function MakerRuleEditComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "At least one segment is required");
    \u0275\u0275elementEnd();
  }
}
function MakerRuleEditComponent_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r8 = ctx.$implicit;
    \u0275\u0275property("value", t_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r8.consentName);
  }
}
function MakerRuleEditComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Consent template is required");
    \u0275\u0275elementEnd();
  }
}
function MakerRuleEditComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 9)(1, "mat-label");
    \u0275\u0275text(2, "Scheduled date & time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function MakerRuleEditComponent_Conditional_57_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.scheduledAt, $event) || (ctx_r2.form.scheduledAt = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.scheduledAt);
    \u0275\u0275property("disabled", !ctx_r2.canEdit());
  }
}
function MakerRuleEditComponent_Conditional_58_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "Complete the recurring schedule before saving or submitting.");
    \u0275\u0275elementEnd();
  }
}
function MakerRuleEditComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, MakerRuleEditComponent_Conditional_58_Conditional_0_Template, 2, 0, "div", 5);
    \u0275\u0275elementStart(1, "app-recurring-schedule-editor", 38);
    \u0275\u0275listener("recurringCronChange", function MakerRuleEditComponent_Conditional_58_Template_app_recurring_schedule_editor_recurringCronChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.recurringCron = $event);
    })("scheduleValidChange", function MakerRuleEditComponent_Conditional_58_Template_app_recurring_schedule_editor_scheduleValidChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.recurringScheduleValid.set($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r2.recurringScheduleOk() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("recurringCron", (tmp_3_0 = ctx_r2.form.recurringCron) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "")("disabled", !ctx_r2.canEdit());
  }
}
function MakerRuleEditComponent_For_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 39);
    \u0275\u0275listener("change", function MakerRuleEditComponent_For_63_Template_mat_checkbox_change_0_listener($event) {
      const ch_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleChannel(ch_r12, $event.checked));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ch_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("checked", ctx_r2.channelOn(ch_r12))("disabled", !ctx_r2.canEdit());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ch_r12);
  }
}
function MakerRuleEditComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function MakerRuleEditComponent_Conditional_69_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.publishLive());
    });
    \u0275\u0275text(1, "Publish live");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r2.busy());
  }
}
function MakerRuleEditComponent_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1, "No audit entries yet.");
    \u0275\u0275elementEnd();
  }
}
function MakerRuleEditComponent_Conditional_74_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "div", 41);
    \u0275\u0275elementStart(2, "div", 42)(3, "div", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 44);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 45);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r14 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(a_r14.action);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", a_r14.userName, " \xB7 ", a_r14.performedAt, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r14.description);
  }
}
function MakerRuleEditComponent_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 33);
    \u0275\u0275repeaterCreate(1, MakerRuleEditComponent_Conditional_74_For_2_Template, 9, 4, "li", null, _forTrack12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.audit());
  }
}
var CHANNELS = ["EMAIL", "SMS", "WHATSAPP", "PUSH", "RCS"];
var MakerRuleEditComponent = class _MakerRuleEditComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.rulesApi = inject(ConsentRulesService);
    this.segmentsApi = inject(SegmentsService);
    this.consentApi = inject(ConsentService);
    this.notify = inject(NotificationService);
    this.auditApi = inject(AuditService);
    this.isNew = signal(false);
    this.ruleId = signal(null);
    this.busy = signal(false);
    this.rule = signal(null);
    this.segments = signal([]);
    this.templates = signal([]);
    this.audit = signal([]);
    this.recurringScheduleValid = signal(true);
    this.scenarios = [
      "NEW_CUSTOMER_DETECTED",
      "CONSENT_NEARING_EXPIRY",
      "EXPIRED_CONSENT",
      "FIRST_SEND_NO_RESPONSE",
      "REMINDER_1_NO_RESPONSE",
      "REMINDER_2_NO_RESPONSE",
      "DECLINED_RE_ENGAGEMENT_AFTER_COOLDOWN",
      "VIP_PRIORITY_FAST_TRACK"
    ];
    this.form = {
      ruleName: "",
      ruleDescription: "",
      ruleType: "PREDEFINED_SCENARIO",
      predefinedScenario: "CONSENT_NEARING_EXPIRY",
      triggerEvent: "",
      primarySegment: "CONSENT_EXPIRING",
      additionalSegmentCodes: [],
      scheduleType: "IMMEDIATE",
      selectedSegments: ["CONSENT_EXPIRING"],
      scheduledAt: "",
      recurringCron: "",
      broadcastChannels: ["EMAIL"],
      consentTemplateId: null
    };
    this.CHANNELS = CHANNELS;
  }
  ngOnInit() {
    this.segmentsApi.list().subscribe((s) => {
      if (s.success && s.data) {
        this.segments.set(s.data);
      }
    });
    this.consentApi.getWorkflowTemplates().subscribe((t) => {
      if (t.success && t.data) {
        this.templates.set(t.data.map((x) => ({ id: x.id, consentName: x.consentName })));
      }
    });
    this.route.paramMap.subscribe((pm) => {
      const idParam = pm.get("id");
      const isNew = idParam === "new";
      this.isNew.set(isNew);
      if (isNew) {
        this.ruleId.set(null);
        this.rule.set(null);
        this.audit.set([]);
        return;
      }
      const id = Number(idParam);
      if (Number.isNaN(id)) {
        return;
      }
      this.ruleId.set(id);
      this.rulesApi.getById(id).subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.patchFromRule(res.data);
            this.rule.set(res.data);
            this.loadAudit(id);
          }
        }
      });
    });
  }
  loadAudit(id) {
    this.auditApi.getEntityAuditTrail("CONSENT_RULE", id).subscribe((r) => {
      if (r.success && r.data) {
        this.audit.set(r.data);
      }
    });
  }
  // private patchFromRule(r: ConsentRule): void {
  //   this.form = {
  //     ruleName: r.ruleName,
  //     ruleDescription: r.ruleDescription || '',
  //     ruleType: r.ruleType,
  //     predefinedScenario: r.predefinedScenario || undefined,
  //     triggerEvent: r.triggerEvent || '',
  //     primarySegment: r.primarySegment,
  //     additionalSegmentCodes: r.additionalSegmentCodes || [],
  //     scheduleType: r.scheduleType,
  //     scheduledAt: r.scheduledAt ? this.toLocalInput(r.scheduledAt) : '',
  //     recurringCron: r.recurringCron || '',
  //     broadcastChannels: r.broadcastChannels?.length ? [...r.broadcastChannels] : ['EMAIL'],
  //     consentTemplateId: r.consentTemplateId ?? null,
  //   };
  // }
  patchFromRule(r) {
    const allSegments = [
      r.primarySegment,
      ...r.additionalSegmentCodes || []
    ].filter(Boolean);
    this.form = {
      ruleName: r.ruleName,
      ruleDescription: r.ruleDescription || "",
      ruleType: r.ruleType,
      predefinedScenario: r.predefinedScenario || void 0,
      triggerEvent: r.triggerEvent || "",
      primarySegment: r.primarySegment,
      additionalSegmentCodes: r.additionalSegmentCodes || [],
      selectedSegments: allSegments,
      // ← hydrate
      scheduleType: r.scheduleType,
      scheduledAt: r.scheduledAt ? this.toLocalInput(r.scheduledAt) : "",
      recurringCron: r.recurringCron || "",
      broadcastChannels: r.broadcastChannels?.length ? [...r.broadcastChannels] : ["EMAIL"],
      consentTemplateId: r.consentTemplateId ?? null
    };
  }
  toLocalInput(iso) {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) {
      return "";
    }
    const pad = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }
  toIso(local) {
    if (!local) {
      return void 0;
    }
    const d = new Date(local);
    return Number.isNaN(d.getTime()) ? void 0 : d.toISOString();
  }
  //  private payload(): ConsentRuleUpsertPayload {
  //   return {
  //     ...this.form,
  //     scheduledAt: this.form.scheduleType === 'SCHEDULED' ? this.toIso(this.form.scheduledAt || '') : undefined,
  //     recurringCron: this.form.scheduleType === 'RECURRING' ? this.form.recurringCron : undefined,
  //     consentTemplateId: this.form.consentTemplateId ?? null,
  //   };
  // }
  payload() {
    const [first, ...rest] = this.form.selectedSegments ?? [this.form.primarySegment];
    return __spreadProps(__spreadValues({}, this.form), {
      primarySegment: first ?? this.form.primarySegment,
      additionalSegmentCodes: rest,
      scheduledAt: this.form.scheduleType === "SCHEDULED" ? this.toIso(this.form.scheduledAt || "") : void 0,
      recurringCron: this.form.scheduleType === "RECURRING" ? this.form.recurringCron : void 0,
      consentTemplateId: this.form.consentTemplateId ?? null
    });
  }
  toggleChannel(ch, checked) {
    const set = new Set(this.form.broadcastChannels || []);
    if (checked) {
      set.add(ch);
    } else {
      set.delete(ch);
    }
    this.form.broadcastChannels = [...set];
  }
  channelOn(ch) {
    return (this.form.broadcastChannels || []).includes(ch);
  }
  selectableSegments() {
    return this.segments().filter((s) => s.selectable);
  }
  saveDraft() {
    this.busy.set(true);
    if (this.isNew()) {
      this.rulesApi.create(this.payload()).subscribe({
        next: (res) => {
          this.busy.set(false);
          if (res.success && res.data) {
            this.notify.success("Draft saved", res.message || "");
            this.isNew.set(false);
            this.ruleId.set(res.data.id);
            this.rule.set(res.data);
            this.loadAudit(res.data.id);
            void this.router.navigate(["/maker/rules", res.data.id], { replaceUrl: true });
          }
        },
        error: () => this.busy.set(false)
      });
    } else {
      const id = this.ruleId();
      this.rulesApi.saveDraft(id, this.payload()).subscribe({
        next: (res) => {
          this.busy.set(false);
          if (res.success && res.data) {
            this.notify.success("Draft saved", res.message || "");
            this.rule.set(res.data);
            this.loadAudit(id);
          }
        },
        error: () => this.busy.set(false)
      });
    }
  }
  submitForApproval() {
    const run = (id) => {
      this.rulesApi.submit(id).subscribe({
        next: (res) => {
          this.busy.set(false);
          if (res.success) {
            this.notify.success("Submitted", res.message || "");
            void this.router.navigateByUrl("/maker/rules");
          }
        },
        error: () => this.busy.set(false)
      });
    };
    this.busy.set(true);
    if (this.isNew()) {
      this.rulesApi.create(this.payload()).subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.ruleId.set(res.data.id);
            this.isNew.set(false);
            run(res.data.id);
          } else {
            this.busy.set(false);
          }
        },
        error: () => this.busy.set(false)
      });
    } else {
      run(this.ruleId());
    }
  }
  publishLive() {
    const id = this.ruleId();
    if (!id) {
      return;
    }
    this.busy.set(true);
    this.rulesApi.publishLive(id).subscribe({
      next: (res) => {
        this.busy.set(false);
        if (res.success && res.data) {
          this.notify.success("Live", res.message || "");
          this.rule.set(res.data);
          this.loadAudit(id);
        }
      },
      error: () => this.busy.set(false)
    });
  }
  canEdit() {
    const s = this.rule()?.status;
    return this.isNew() || s === "DRAFT" || s === "REVISION_REQUESTED";
  }
  // canSubmit(): boolean {
  //   return this.canEdit() && this.form.consentTemplateId !== null;
  // }
  canSubmit() {
    return this.canEdit() && this.form.consentTemplateId !== null && (this.form.selectedSegments?.length ?? 0) > 0;
  }
  canPublish() {
    return this.rule()?.status === "APPROVED";
  }
  onScheduleTypeChange(st) {
    if (st !== "RECURRING") {
      this.recurringScheduleValid.set(true);
    }
  }
  recurringScheduleOk() {
    if (this.form.scheduleType !== "RECURRING") {
      return true;
    }
    return this.recurringScheduleValid();
  }
  feedbackBanner() {
    const r = this.rule();
    if (!r) {
      return null;
    }
    if (r.status === "REJECTED" && r.rejectionReason) {
      return `Rejected: ${r.rejectionReason}`;
    }
    if (r.status === "REVISION_REQUESTED" && r.revisionReason) {
      return `Checker requested revision: ${r.revisionReason}`;
    }
    if (r.reviewerRemarks && (r.status === "APPROVED" || r.status === "REJECTED" || r.status === "REVISION_REQUESTED")) {
      return `Checker remarks: ${r.reviewerRemarks}`;
    }
    return null;
  }
  static {
    this.\u0275fac = function MakerRuleEditComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MakerRuleEditComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MakerRuleEditComponent, selectors: [["app-maker-rule-edit"]], decls: 75, vars: 23, consts: [["tplField", "ngModel"], [1, "page"], [1, "subnav"], ["mat-stroked-button", "", "routerLink", "/maker/rules"], [1, "title-row"], [1, "alert", "warn"], [1, "layout"], [1, "panel", "main-form"], [1, "section-title"], ["appearance", "outline", 1, "full"], ["matInput", "", "name", "ruleName", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["matInput", "", "rows", "3", "name", "desc", 3, "ngModelChange", "ngModel", "disabled"], ["appearance", "outline"], ["name", "rt", 3, "ngModelChange", "ngModel", "disabled"], ["value", "PREDEFINED_SCENARIO"], ["value", "CUSTOM"], ["appearance", "outline", 1, "grow"], ["name", "seg", "multiple", "", "required", "", 3, "ngModelChange", "ngModel", "disabled"], [3, "value"], ["appearance", "outline", "floatLabel", "always", 1, "full"], ["name", "tpl", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["name", "sch", 1, "stack", 3, "ngModelChange", "ngModel", "disabled"], ["value", "IMMEDIATE"], ["value", "SCHEDULED"], ["value", "RECURRING"], [1, "channel-grid"], [3, "checked", "disabled"], [1, "actions"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click", "disabled"], ["mat-flat-button", "", "type", "button", 1, "live", 3, "disabled"], [1, "panel", "audit"], [1, "muted"], [1, "timeline"], [3, "status"], ["name", "sc", 3, "ngModelChange", "ngModel", "disabled"], ["matInput", "", "name", "tr", 3, "ngModelChange", "ngModel", "disabled"], ["matInput", "", "type", "datetime-local", "name", "sat", 3, "ngModelChange", "ngModel", "disabled"], [3, "recurringCronChange", "scheduleValidChange", "recurringCron", "disabled"], [3, "change", "checked", "disabled"], ["mat-flat-button", "", "type", "button", 1, "live", 3, "click", "disabled"], [1, "t-dot"], [1, "t-body"], [1, "t-action"], [1, "t-meta"], [1, "t-desc"]], template: function MakerRuleEditComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "a", 3);
        \u0275\u0275text(3, "\u2190 Rules");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(4, MakerRuleEditComponent_Conditional_4_Template, 4, 2, "div", 4)(5, MakerRuleEditComponent_Conditional_5_Template, 2, 1, "h1")(6, MakerRuleEditComponent_Conditional_6_Template, 2, 1, "div", 5);
        \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "div", 8);
        \u0275\u0275text(10, "Definition");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-form-field", 9)(12, "mat-label");
        \u0275\u0275text(13, "Rule name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function MakerRuleEditComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.form.ruleName, $event) || (ctx.form.ruleName = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "mat-form-field", 9)(16, "mat-label");
        \u0275\u0275text(17, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "textarea", 11);
        \u0275\u0275twoWayListener("ngModelChange", function MakerRuleEditComponent_Template_textarea_ngModelChange_18_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.form.ruleDescription, $event) || (ctx.form.ruleDescription = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "mat-form-field", 12)(20, "mat-label");
        \u0275\u0275text(21, "Rule type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "mat-select", 13);
        \u0275\u0275twoWayListener("ngModelChange", function MakerRuleEditComponent_Template_mat_select_ngModelChange_22_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.form.ruleType, $event) || (ctx.form.ruleType = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(23, "mat-option", 14);
        \u0275\u0275text(24, "Predefined scenario");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "mat-option", 15);
        \u0275\u0275text(26, "Custom");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(27, MakerRuleEditComponent_Conditional_27_Template, 6, 2, "mat-form-field", 16)(28, MakerRuleEditComponent_Conditional_28_Template, 4, 2, "mat-form-field", 16);
        \u0275\u0275elementStart(29, "div", 8);
        \u0275\u0275text(30, "Audience & template");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "mat-form-field", 9)(32, "mat-label");
        \u0275\u0275text(33, "Audience segments");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "mat-select", 17);
        \u0275\u0275twoWayListener("ngModelChange", function MakerRuleEditComponent_Template_mat_select_ngModelChange_34_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.form.selectedSegments, $event) || (ctx.form.selectedSegments = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275repeaterCreate(35, MakerRuleEditComponent_For_36_Template, 2, 3, "mat-option", 18, _forTrack02);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "mat-hint");
        \u0275\u0275text(38, " Select one or more segments. The first selected becomes the primary. Large audiences are processed in batches. ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(39, MakerRuleEditComponent_Conditional_39_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "mat-form-field", 19)(41, "mat-label");
        \u0275\u0275text(42, "Consent template *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "mat-select", 20, 0);
        \u0275\u0275twoWayListener("ngModelChange", function MakerRuleEditComponent_Template_mat_select_ngModelChange_43_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.form.consentTemplateId, $event) || (ctx.form.consentTemplateId = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275repeaterCreate(45, MakerRuleEditComponent_For_46_Template, 2, 2, "mat-option", 18, _forTrack12);
        \u0275\u0275elementEnd();
        \u0275\u0275template(47, MakerRuleEditComponent_Conditional_47_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 8);
        \u0275\u0275text(49, "Schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "mat-radio-group", 21);
        \u0275\u0275twoWayListener("ngModelChange", function MakerRuleEditComponent_Template_mat_radio_group_ngModelChange_50_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.form.scheduleType, $event) || (ctx.form.scheduleType = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function MakerRuleEditComponent_Template_mat_radio_group_ngModelChange_50_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onScheduleTypeChange($event));
        });
        \u0275\u0275elementStart(51, "mat-radio-button", 22);
        \u0275\u0275text(52, "Immediate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "mat-radio-button", 23);
        \u0275\u0275text(54, "Scheduled");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "mat-radio-button", 24);
        \u0275\u0275text(56, "Recurring");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(57, MakerRuleEditComponent_Conditional_57_Template, 4, 2, "mat-form-field", 9)(58, MakerRuleEditComponent_Conditional_58_Template, 2, 3);
        \u0275\u0275elementStart(59, "div", 8);
        \u0275\u0275text(60, "Channels");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 25);
        \u0275\u0275repeaterCreate(62, MakerRuleEditComponent_For_63_Template, 2, 3, "mat-checkbox", 26, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "div", 27)(65, "button", 28);
        \u0275\u0275listener("click", function MakerRuleEditComponent_Template_button_click_65_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.saveDraft());
        });
        \u0275\u0275text(66, "Save draft");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "button", 29);
        \u0275\u0275listener("click", function MakerRuleEditComponent_Template_button_click_67_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.submitForApproval());
        });
        \u0275\u0275text(68, " Submit for approval ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(69, MakerRuleEditComponent_Conditional_69_Template, 2, 1, "button", 30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "aside", 31)(71, "div", 8);
        \u0275\u0275text(72, "Approval & audit");
        \u0275\u0275elementEnd();
        \u0275\u0275template(73, MakerRuleEditComponent_Conditional_73_Template, 2, 0, "p", 32)(74, MakerRuleEditComponent_Conditional_74_Template, 3, 0, "ul", 33);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_13_0;
        const tplField_r15 = \u0275\u0275reference(44);
        \u0275\u0275advance(4);
        \u0275\u0275conditional((tmp_1_0 = ctx.rule()) ? 4 : 5, tmp_1_0);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_2_0 = ctx.feedbackBanner()) ? 6 : -1, tmp_2_0);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.ruleName);
        \u0275\u0275property("disabled", !ctx.canEdit());
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.ruleDescription);
        \u0275\u0275property("disabled", !ctx.canEdit());
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.ruleType);
        \u0275\u0275property("disabled", !ctx.canEdit());
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.form.ruleType === "PREDEFINED_SCENARIO" ? 27 : 28);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.selectedSegments);
        \u0275\u0275property("disabled", !ctx.canEdit());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.selectableSegments());
        \u0275\u0275advance(4);
        \u0275\u0275conditional(((tmp_13_0 = ctx.form.selectedSegments == null ? null : ctx.form.selectedSegments.length) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : 0) === 0 ? 39 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.consentTemplateId);
        \u0275\u0275property("disabled", !ctx.canEdit());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.templates());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(tplField_r15.touched && tplField_r15.invalid ? 47 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.scheduleType);
        \u0275\u0275property("disabled", !ctx.canEdit());
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.form.scheduleType === "SCHEDULED" ? 57 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.form.scheduleType === "RECURRING" ? 58 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.CHANNELS);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.busy() || !ctx.canEdit() || !ctx.recurringScheduleOk());
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.busy() || !ctx.canSubmit() || !ctx.recurringScheduleOk());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.canPublish() ? 69 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(!ctx.audit().length ? 73 : 74);
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      RequiredValidator,
      NgModel,
      RouterLink,
      MatButtonModule,
      MatAnchor,
      MatButton,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatHint,
      MatError,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatCheckboxModule,
      MatCheckbox,
      MatRadioModule,
      MatRadioGroup,
      MatRadioButton,
      WorkflowStatusBadgeComponent,
      RecurringScheduleEditorComponent
    ], styles: ['@charset "UTF-8";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: var(--space-6, 24px) var(--space-4, 16px) 80px;\n}\n.subnav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-bottom: 22px;\n}\n.title-row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.page[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(28px, 3vw, 38px);\n  font-weight: 700;\n  line-height: 1.1;\n  letter-spacing: -0.03em;\n  color: #0f172a;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 16px;\n  margin-bottom: 20px;\n  border-radius: 14px;\n  font-size: 13px;\n  line-height: 1.5;\n  font-weight: 500;\n  border: 1px solid transparent;\n}\n.alert.warn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(254, 249, 195, 0.75),\n      rgba(255, 255, 255, 0.96));\n  border-color: rgba(217, 119, 6, 0.18);\n  color: #92400e;\n  box-shadow: 0 4px 14px rgba(217, 119, 6, 0.08);\n}\n.layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 340px;\n  gap: 22px;\n  align-items: start;\n}\n.panel[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 24px;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04);\n  padding: 24px;\n}\n.panel[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0 auto auto 0;\n  width: 100%;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(37, 99, 235, 0.28),\n      transparent);\n}\n.main-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.audit[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 24px;\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 4px;\n  margin-bottom: 4px;\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #2563eb;\n}\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.grow[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n  .mat-mdc-form-field {\n  width: 100%;\n}\n  .mat-mdc-text-field-wrapper {\n  min-height: 58px;\n  border-radius: 18px !important;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.98),\n      rgba(248, 250, 252, 0.96));\n  transition:\n    border-color 0.18s ease,\n    box-shadow 0.18s ease,\n    background 0.18s ease,\n    transform 0.18s ease;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9);\n}\n  .mat-mdc-form-field:hover .mat-mdc-text-field-wrapper {\n  background: #ffffff;\n}\n  .mat-mdc-form-field-focus-overlay {\n  opacity: 0 !important;\n}\n  .mdc-notched-outline__leading, \n  .mdc-notched-outline__notch, \n  .mdc-notched-outline__trailing {\n  border-color: rgba(203, 213, 225, 0.9) !important;\n  transition: border-color 0.18s ease;\n}\n  .mat-focused .mdc-notched-outline__leading, \n  .mat-focused .mdc-notched-outline__notch, \n  .mat-focused .mdc-notched-outline__trailing {\n  border-color: #3b82f6 !important;\n  border-width: 2px !important;\n}\n  .mat-mdc-text-field-wrapper:hover .mdc-notched-outline__leading, \n  .mat-mdc-text-field-wrapper:hover .mdc-notched-outline__notch, \n  .mat-mdc-text-field-wrapper:hover .mdc-notched-outline__trailing {\n  border-color: #93c5fd !important;\n}\n  .mat-focused .mat-mdc-text-field-wrapper {\n  background: #ffffff;\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1), 0 10px 22px rgba(37, 99, 235, 0.08);\n}\n  .mat-mdc-input-element {\n  font-size: 18px !important;\n  color: #0f172a !important;\n}\n  .mat-mdc-select-value {\n  color: #0f172a !important;\n  font-size: 14px;\n}\n  .mat-mdc-floating-label {\n  color: #64748b !important;\n  font-weight: 500;\n}\n  .mat-focused .mat-mdc-floating-label {\n  color: #2563eb !important;\n}\n  .mat-mdc-form-field-subscript-wrapper {\n  margin-top: 4px;\n}\n  .mat-mdc-form-field-hint {\n  font-size: 11px;\n  color: #64748b;\n}\n  .mdc-notched-outline__notch {\n  border-right: none !important;\n}\n  .mat-mdc-radio-group {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n  .mat-mdc-radio-button {\n  padding: 10px 14px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n  transition:\n    border-color 0.18s ease,\n    background 0.18s ease,\n    transform 0.18s ease;\n}\n  .mat-mdc-radio-button:hover {\n  border-color: #bfdbfe;\n  background: #eff6ff;\n}\n.channel-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));\n  gap: 14px;\n}\n  .channel-grid .mat-mdc-checkbox {\n  width: 100%;\n  margin: 0;\n}\n  .channel-grid .mdc-form-field {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n  .channel-grid .mdc-checkbox {\n  margin-right: 12px;\n}\n  .channel-grid .mdc-form-field > label {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  min-height: 58px;\n  padding: 0 18px;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.98),\n      rgba(248, 250, 252, 0.96));\n  font-size: 14px;\n  font-weight: 600;\n  color: #334155;\n  cursor: pointer;\n  transition:\n    border-color 0.18s ease,\n    background 0.18s ease,\n    transform 0.18s ease,\n    box-shadow 0.18s ease;\n}\n  .channel-grid .mdc-form-field > label:hover {\n  border-color: #93c5fd;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff,\n      #eff6ff);\n  transform: translateY(-1px);\n  box-shadow: 0 8px 18px rgba(59, 130, 246, 0.08);\n}\n  .channel-grid .mat-mdc-checkbox-checked + label, \n  .channel-grid .mdc-checkbox--selected ~ label {\n  border-color: rgba(59, 130, 246, 0.42);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(239, 246, 255, 0.95),\n      rgba(219, 234, 254, 0.82));\n  color: #1d4ed8;\n  box-shadow: 0 8px 18px rgba(59, 130, 246, 0.1);\n}\n  .channel-grid .mdc-checkbox__background {\n  border-radius: 6px;\n}\n  .channel-grid .mat-mdc-checkbox.mat-accent {\n  --mdc-checkbox-selected-checkmark-color: #ffffff;\n  --mdc-checkbox-selected-focus-icon-color: #2563eb;\n  --mdc-checkbox-selected-hover-icon-color: #2563eb;\n  --mdc-checkbox-selected-icon-color: #2563eb;\n  --mdc-checkbox-selected-pressed-icon-color: #2563eb;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 8px;\n}\n.live[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #16a34a,\n      #22c55e) !important;\n  color: #ffffff !important;\n  box-shadow: 0 8px 18px rgba(34, 197, 94, 0.22);\n}\n.muted[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: #94a3b8;\n}\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  list-style: none;\n  margin: 0;\n  padding: 0 0 0 18px;\n}\n.timeline[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 6px;\n  bottom: 6px;\n  left: 6px;\n  width: 2px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(37, 99, 235, 0.25),\n      rgba(148, 163, 184, 0.12));\n}\n.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 18px;\n}\n.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n.t-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -18px;\n  top: 5px;\n  width: 12px;\n  height: 12px;\n  border-radius: 999px;\n  background: #2563eb;\n  border: 3px solid #dbeafe;\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.08);\n}\n.t-body[_ngcontent-%COMP%] {\n  padding-left: 8px;\n}\n.t-action[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.t-meta[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: 11px;\n  color: #94a3b8;\n}\n.t-desc[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 12px;\n  line-height: 1.55;\n  color: #475569;\n}\nbutton[mat-flat-button][_ngcontent-%COMP%], \nbutton[mat-stroked-button][_ngcontent-%COMP%] {\n  border-radius: 14px !important;\n  font-weight: 600 !important;\n  letter-spacing: 0.01em;\n}\nbutton[mat-flat-button][_ngcontent-%COMP%] {\n  box-shadow: 0 6px 18px rgba(37, 99, 235, 0.16);\n}\n@media (max-width: 1100px) {\n  .layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .audit[_ngcontent-%COMP%] {\n    position: relative;\n    top: unset;\n  }\n}\n@media (max-width: 768px) {\n  .page[_ngcontent-%COMP%] {\n    padding-inline: 12px;\n  }\n  .panel[_ngcontent-%COMP%] {\n    border-radius: 20px;\n    padding: 20px;\n  }\n  .title-row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .page[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .channel-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 560px) {\n  .panel[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .title-row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .page[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n/*# sourceMappingURL=maker-rule-edit.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MakerRuleEditComponent, [{
    type: Component,
    args: [{ selector: "app-maker-rule-edit", standalone: true, imports: [
      FormsModule,
      RouterLink,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatCheckboxModule,
      MatRadioModule,
      WorkflowStatusBadgeComponent,
      RecurringScheduleEditorComponent
    ], template: `<div class="page">\r
  <div class="subnav">\r
    <a mat-stroked-button routerLink="/maker/rules">\u2190 Rules</a>\r
  </div>\r
\r
  @if (rule(); as r) {\r
  <div class="title-row">\r
    <h1>{{ r.ruleName }}</h1>\r
    <app-workflow-status-badge [status]="r.status" />\r
  </div>\r
  } @else {\r
  <h1>{{ isNew() ? 'New rule' : 'Edit rule' }}</h1>\r
  }\r
\r
  @if (feedbackBanner(); as fb) {\r
  <div class="alert warn">{{ fb }}</div>\r
  }\r
\r
  <div class="layout">\r
    <div class="panel main-form">\r
      <div class="section-title">Definition</div>\r
      <mat-form-field appearance="outline" class="full">\r
        <mat-label>Rule name</mat-label>\r
        <input matInput name="ruleName" [(ngModel)]="form.ruleName" [disabled]="!canEdit()" required />\r
      </mat-form-field>\r
      <mat-form-field appearance="outline" class="full">\r
        <mat-label>Description</mat-label>\r
        <textarea matInput rows="3" name="desc" [(ngModel)]="form.ruleDescription" [disabled]="!canEdit()"></textarea>\r
      </mat-form-field>\r
\r
      <mat-form-field appearance="outline">\r
        <mat-label>Rule type</mat-label>\r
        <mat-select name="rt" [(ngModel)]="form.ruleType" [disabled]="!canEdit()">\r
          <mat-option value="PREDEFINED_SCENARIO">Predefined scenario</mat-option>\r
          <mat-option value="CUSTOM">Custom</mat-option>\r
        </mat-select>\r
      </mat-form-field>\r
\r
      @if (form.ruleType === 'PREDEFINED_SCENARIO') {\r
      <mat-form-field appearance="outline" class="grow">\r
        <mat-label>Scenario</mat-label>\r
        <mat-select name="sc" [(ngModel)]="form.predefinedScenario" [disabled]="!canEdit()">\r
          @for (sc of scenarios; track sc) {\r
          <mat-option [value]="sc">{{ sc }}</mat-option>\r
          }\r
        </mat-select>\r
      </mat-form-field>\r
      } @else {\r
      <mat-form-field appearance="outline" class="grow">\r
        <mat-label>Trigger / event</mat-label>\r
        <input matInput name="tr" [(ngModel)]="form.triggerEvent" [disabled]="!canEdit()" />\r
      </mat-form-field>\r
      }\r
\r
      <div class="section-title">Audience &amp; template</div>\r
\r
      <mat-form-field appearance="outline" class="full">\r
        <mat-label>Audience segments</mat-label>\r
        <mat-select\r
          name="seg"\r
          [(ngModel)]="form.selectedSegments"\r
          [disabled]="!canEdit()"\r
          multiple\r
          required>\r
          @for (s of selectableSegments(); track s.code) {\r
          <mat-option [value]="s.code">{{ s.label }} ({{ s.customerCount }})</mat-option>\r
          }\r
        </mat-select>\r
        <mat-hint>\r
          Select one or more segments. The first selected becomes the primary.\r
          Large audiences are processed in batches.\r
        </mat-hint>\r
        @if ((form.selectedSegments?.length ?? 0) === 0) {\r
        <mat-error>At least one segment is required</mat-error>\r
        }\r
      </mat-form-field>\r
\r
      <mat-form-field appearance="outline" floatLabel="always" class="full">\r
        <mat-label>Consent template *</mat-label>\r
        <mat-select name="tpl" [(ngModel)]="form.consentTemplateId" [disabled]="!canEdit()" required\r
          #tplField="ngModel">\r
          @for (t of templates(); track t.id) {\r
          <mat-option [value]="t.id">{{ t.consentName }}</mat-option>\r
          }\r
        </mat-select>\r
        @if (tplField.touched && tplField.invalid) {\r
        <mat-error>Consent template is required</mat-error>\r
        }\r
      </mat-form-field>\r
\r
      <div class="section-title">Schedule</div>\r
      <mat-radio-group class="stack" name="sch" [(ngModel)]="form.scheduleType" [disabled]="!canEdit()"\r
        (ngModelChange)="onScheduleTypeChange($event)">\r
        <mat-radio-button value="IMMEDIATE">Immediate</mat-radio-button>\r
        <mat-radio-button value="SCHEDULED">Scheduled</mat-radio-button>\r
        <mat-radio-button value="RECURRING">Recurring</mat-radio-button>\r
      </mat-radio-group>\r
      @if (form.scheduleType === 'SCHEDULED') {\r
      <mat-form-field appearance="outline" class="full">\r
        <mat-label>Scheduled date &amp; time</mat-label>\r
        <input matInput type="datetime-local" name="sat" [(ngModel)]="form.scheduledAt" [disabled]="!canEdit()" />\r
      </mat-form-field>\r
      }\r
      @if (form.scheduleType === 'RECURRING') {\r
      @if (!recurringScheduleOk()) {\r
      <div class="alert warn">Complete the recurring schedule before saving or submitting.</div>\r
      }\r
      <app-recurring-schedule-editor [recurringCron]="form.recurringCron ?? ''" [disabled]="!canEdit()"\r
        (recurringCronChange)="form.recurringCron = $event"\r
        (scheduleValidChange)="recurringScheduleValid.set($event)" />\r
      }\r
\r
      <div class="section-title">Channels</div>\r
      <div class="channel-grid">\r
        @for (ch of CHANNELS; track ch) {\r
        <mat-checkbox [checked]="channelOn(ch)" (change)="toggleChannel(ch, $event.checked)" [disabled]="!canEdit()">{{\r
          ch }}</mat-checkbox>\r
        }\r
      </div>\r
\r
      <div class="actions">\r
        <button mat-stroked-button type="button" (click)="saveDraft()"\r
          [disabled]="busy() || !canEdit() || !recurringScheduleOk()">Save draft</button>\r
        <button mat-flat-button color="primary" type="button" (click)="submitForApproval()"\r
          [disabled]="busy() || !canSubmit() || !recurringScheduleOk()">\r
          Submit for approval\r
        </button>\r
        @if (canPublish()) {\r
        <button mat-flat-button class="live" type="button" (click)="publishLive()" [disabled]="busy()">Publish\r
          live</button>\r
        }\r
      </div>\r
    </div>\r
\r
    <aside class="panel audit">\r
      <div class="section-title">Approval &amp; audit</div>\r
      @if (!audit().length) {\r
      <p class="muted">No audit entries yet.</p>\r
      } @else {\r
      <ul class="timeline">\r
        @for (a of audit(); track a.id) {\r
        <li>\r
          <div class="t-dot"></div>\r
          <div class="t-body">\r
            <div class="t-action">{{ a.action }}</div>\r
            <div class="t-meta">{{ a.userName }} \xB7 {{ a.performedAt }}</div>\r
            <div class="t-desc">{{ a.description }}</div>\r
          </div>\r
        </li>\r
        }\r
      </ul>\r
      }\r
    </aside>\r
  </div>\r
</div>`, styles: ['@charset "UTF-8";\n\n/* src/app/features/maker/maker-rule-edit/maker-rule-edit.component.scss */\n:root {\n  --color-primary: #6366f1;\n  --color-primary-dark: #4f46e5;\n  --color-primary-light: #e0e7ff;\n  --color-success: #16a34a;\n  --color-success-light: #f0fdf4;\n  --color-success-border: #bbf7d0;\n  --color-error: #dc2626;\n  --color-error-light: #fef2f2;\n  --color-error-border: #fecaca;\n  --color-warning: #d97706;\n  --color-warning-light: #fffbeb;\n  --color-warning-border: #fde68a;\n  --color-info: #2563eb;\n  --color-info-light: #eff6ff;\n  --color-info-border: #bfdbfe;\n  --color-amber: #f59e0b;\n  --color-amber-light: #fffbeb;\n  --color-amber-border: #fcd34d;\n  --color-purple-badge: #7c3aed;\n  --sidebar-bg: #0f172a;\n  --sidebar-hover: rgba(255, 255, 255, 0.06);\n  --sidebar-active-bg: rgba(99, 102, 241, 0.18);\n  --sidebar-active-border: #6366f1;\n  --sidebar-text: #94a3b8;\n  --sidebar-text-active: #ffffff;\n  --sidebar-text-muted: #475569;\n  --sidebar-width: 260px;\n  --page-bg: #f1f5f9;\n  --card-bg: #ffffff;\n  --card-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  --card-radius: 12px;\n  --card-border: 1px solid #e2e8f0;\n  --input-radius: 8px;\n  --btn-radius: 8px;\n  --input-height: 44px;\n  --input-border-color: #e2e8f0;\n  --input-bg: #ffffff;\n  --input-bg-disabled: #f8fafc;\n  --input-placeholder-color: #94a3b8;\n  --input-text-color: #111827;\n  --input-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.15);\n  --input-focus-border: var(--color-info);\n  --input-error-border: var(--color-error);\n  --input-error-ring: 0 0 0 3px rgba(220, 38, 38, 0.1);\n  --font-body:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --font-mono:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-18: 18px;\n  --text-24: 24px;\n  --text-32: 32px;\n  --space-1: 4px;\n  --space-2: 8px;\n  --space-3: 12px;\n  --space-4: 16px;\n  --space-5: 20px;\n  --space-6: 24px;\n  --space-8: 32px;\n  --space-10: 40px;\n  --space-12: 48px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);\n}\n.page {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: var(--space-6, 24px) var(--space-4, 16px) 80px;\n}\n.subnav {\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.title-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-bottom: 22px;\n}\n.title-row h1,\n.page > h1 {\n  margin: 0;\n  font-size: clamp(28px, 3vw, 38px);\n  font-weight: 700;\n  line-height: 1.1;\n  letter-spacing: -0.03em;\n  color: #0f172a;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 16px;\n  margin-bottom: 20px;\n  border-radius: 14px;\n  font-size: 13px;\n  line-height: 1.5;\n  font-weight: 500;\n  border: 1px solid transparent;\n}\n.alert.warn {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(254, 249, 195, 0.75),\n      rgba(255, 255, 255, 0.96));\n  border-color: rgba(217, 119, 6, 0.18);\n  color: #92400e;\n  box-shadow: 0 4px 14px rgba(217, 119, 6, 0.08);\n}\n.layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 340px;\n  gap: 22px;\n  align-items: start;\n}\n.panel {\n  position: relative;\n  overflow: hidden;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 24px;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04);\n  padding: 24px;\n}\n.panel::before {\n  content: "";\n  position: absolute;\n  inset: 0 auto auto 0;\n  width: 100%;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(37, 99, 235, 0.28),\n      transparent);\n}\n.main-form {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.audit {\n  position: sticky;\n  top: 24px;\n}\n.section-title {\n  display: flex;\n  align-items: center;\n  margin-top: 4px;\n  margin-bottom: 4px;\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #2563eb;\n}\n.full {\n  width: 100%;\n}\n.grow {\n  flex: 1;\n}\n.stack {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n::ng-deep .mat-mdc-form-field {\n  width: 100%;\n}\n::ng-deep .mat-mdc-text-field-wrapper {\n  min-height: 58px;\n  border-radius: 18px !important;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.98),\n      rgba(248, 250, 252, 0.96));\n  transition:\n    border-color 0.18s ease,\n    box-shadow 0.18s ease,\n    background 0.18s ease,\n    transform 0.18s ease;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9);\n}\n::ng-deep .mat-mdc-form-field:hover .mat-mdc-text-field-wrapper {\n  background: #ffffff;\n}\n::ng-deep .mat-mdc-form-field-focus-overlay {\n  opacity: 0 !important;\n}\n::ng-deep .mdc-notched-outline__leading,\n::ng-deep .mdc-notched-outline__notch,\n::ng-deep .mdc-notched-outline__trailing {\n  border-color: rgba(203, 213, 225, 0.9) !important;\n  transition: border-color 0.18s ease;\n}\n::ng-deep .mat-focused .mdc-notched-outline__leading,\n::ng-deep .mat-focused .mdc-notched-outline__notch,\n::ng-deep .mat-focused .mdc-notched-outline__trailing {\n  border-color: #3b82f6 !important;\n  border-width: 2px !important;\n}\n::ng-deep .mat-mdc-text-field-wrapper:hover .mdc-notched-outline__leading,\n::ng-deep .mat-mdc-text-field-wrapper:hover .mdc-notched-outline__notch,\n::ng-deep .mat-mdc-text-field-wrapper:hover .mdc-notched-outline__trailing {\n  border-color: #93c5fd !important;\n}\n::ng-deep .mat-focused .mat-mdc-text-field-wrapper {\n  background: #ffffff;\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1), 0 10px 22px rgba(37, 99, 235, 0.08);\n}\n::ng-deep .mat-mdc-input-element {\n  font-size: 18px !important;\n  color: #0f172a !important;\n}\n::ng-deep .mat-mdc-select-value {\n  color: #0f172a !important;\n  font-size: 14px;\n}\n::ng-deep .mat-mdc-floating-label {\n  color: #64748b !important;\n  font-weight: 500;\n}\n::ng-deep .mat-focused .mat-mdc-floating-label {\n  color: #2563eb !important;\n}\n::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  margin-top: 4px;\n}\n::ng-deep .mat-mdc-form-field-hint {\n  font-size: 11px;\n  color: #64748b;\n}\n::ng-deep .mdc-notched-outline__notch {\n  border-right: none !important;\n}\n::ng-deep .mat-mdc-radio-group {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n::ng-deep .mat-mdc-radio-button {\n  padding: 10px 14px;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n  transition:\n    border-color 0.18s ease,\n    background 0.18s ease,\n    transform 0.18s ease;\n}\n::ng-deep .mat-mdc-radio-button:hover {\n  border-color: #bfdbfe;\n  background: #eff6ff;\n}\n.channel-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));\n  gap: 14px;\n}\n::ng-deep .channel-grid .mat-mdc-checkbox {\n  width: 100%;\n  margin: 0;\n}\n::ng-deep .channel-grid .mdc-form-field {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n::ng-deep .channel-grid .mdc-checkbox {\n  margin-right: 12px;\n}\n::ng-deep .channel-grid .mdc-form-field > label {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  min-height: 58px;\n  padding: 0 18px;\n  border-radius: 18px;\n  border: 1px solid #e2e8f0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.98),\n      rgba(248, 250, 252, 0.96));\n  font-size: 14px;\n  font-weight: 600;\n  color: #334155;\n  cursor: pointer;\n  transition:\n    border-color 0.18s ease,\n    background 0.18s ease,\n    transform 0.18s ease,\n    box-shadow 0.18s ease;\n}\n::ng-deep .channel-grid .mdc-form-field > label:hover {\n  border-color: #93c5fd;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff,\n      #eff6ff);\n  transform: translateY(-1px);\n  box-shadow: 0 8px 18px rgba(59, 130, 246, 0.08);\n}\n::ng-deep .channel-grid .mat-mdc-checkbox-checked + label,\n::ng-deep .channel-grid .mdc-checkbox--selected ~ label {\n  border-color: rgba(59, 130, 246, 0.42);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(239, 246, 255, 0.95),\n      rgba(219, 234, 254, 0.82));\n  color: #1d4ed8;\n  box-shadow: 0 8px 18px rgba(59, 130, 246, 0.1);\n}\n::ng-deep .channel-grid .mdc-checkbox__background {\n  border-radius: 6px;\n}\n::ng-deep .channel-grid .mat-mdc-checkbox.mat-accent {\n  --mdc-checkbox-selected-checkmark-color: #ffffff;\n  --mdc-checkbox-selected-focus-icon-color: #2563eb;\n  --mdc-checkbox-selected-hover-icon-color: #2563eb;\n  --mdc-checkbox-selected-icon-color: #2563eb;\n  --mdc-checkbox-selected-pressed-icon-color: #2563eb;\n}\n.actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 8px;\n}\n.live {\n  background:\n    linear-gradient(\n      135deg,\n      #16a34a,\n      #22c55e) !important;\n  color: #ffffff !important;\n  box-shadow: 0 8px 18px rgba(34, 197, 94, 0.22);\n}\n.muted {\n  margin: 0;\n  font-size: 13px;\n  color: #94a3b8;\n}\n.timeline {\n  position: relative;\n  list-style: none;\n  margin: 0;\n  padding: 0 0 0 18px;\n}\n.timeline::before {\n  content: "";\n  position: absolute;\n  top: 6px;\n  bottom: 6px;\n  left: 6px;\n  width: 2px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(37, 99, 235, 0.25),\n      rgba(148, 163, 184, 0.12));\n}\n.timeline li {\n  position: relative;\n  padding-bottom: 18px;\n}\n.timeline li:last-child {\n  padding-bottom: 0;\n}\n.t-dot {\n  position: absolute;\n  left: -18px;\n  top: 5px;\n  width: 12px;\n  height: 12px;\n  border-radius: 999px;\n  background: #2563eb;\n  border: 3px solid #dbeafe;\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.08);\n}\n.t-body {\n  padding-left: 8px;\n}\n.t-action {\n  font-size: 13px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.t-meta {\n  margin-top: 2px;\n  font-size: 11px;\n  color: #94a3b8;\n}\n.t-desc {\n  margin-top: 6px;\n  font-size: 12px;\n  line-height: 1.55;\n  color: #475569;\n}\nbutton[mat-flat-button],\nbutton[mat-stroked-button] {\n  border-radius: 14px !important;\n  font-weight: 600 !important;\n  letter-spacing: 0.01em;\n}\nbutton[mat-flat-button] {\n  box-shadow: 0 6px 18px rgba(37, 99, 235, 0.16);\n}\n@media (max-width: 1100px) {\n  .layout {\n    grid-template-columns: 1fr;\n  }\n  .audit {\n    position: relative;\n    top: unset;\n  }\n}\n@media (max-width: 768px) {\n  .page {\n    padding-inline: 12px;\n  }\n  .panel {\n    border-radius: 20px;\n    padding: 20px;\n  }\n  .title-row h1,\n  .page > h1 {\n    font-size: 28px;\n  }\n  .channel-grid {\n    grid-template-columns: 1fr;\n  }\n  .actions {\n    flex-direction: column;\n  }\n  .actions button {\n    width: 100%;\n  }\n}\n@media (max-width: 560px) {\n  .panel {\n    padding: 18px;\n  }\n  .section-title {\n    font-size: 11px;\n  }\n  .title-row h1,\n  .page > h1 {\n    font-size: 24px;\n  }\n}\n/*# sourceMappingURL=maker-rule-edit.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MakerRuleEditComponent, { className: "MakerRuleEditComponent", filePath: "src/app/features/maker/maker-rule-edit/maker-rule-edit.component.ts", lineNumber: 41 });
})();
export {
  MakerRuleEditComponent
};
//# sourceMappingURL=chunk-VF2ZB2RG.js.map
