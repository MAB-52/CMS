import {
  ConsentPreviewDialogComponent,
  MergeTagService
} from "./chunk-YWOCPWDM.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatInput,
  MatInputModule,
  MatLabel
} from "./chunk-4SZDVV34.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule,
  Validators
} from "./chunk-3TIZOPIA.js";
import {
  UniqueSelectionDispatcher
} from "./chunk-W5JVEPNS.js";
import {
  ConfirmDialogComponent
} from "./chunk-GJSWBWWB.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-UE7UOPB6.js";
import {
  ConsentService
} from "./chunk-5L2IXPPD.js";
import "./chunk-OIBNGD5S.js";
import {
  CdkPortalOutlet,
  PortalModule,
  TemplatePortal
} from "./chunk-SPCMNNUE.js";
import {
  ActivatedRoute,
  DomSanitizer,
  Router,
  RouterLink
} from "./chunk-W4T3EBZ5.js";
import {
  NotificationService
} from "./chunk-4RAWTRTP.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  EMPTY,
  ENTER,
  ElementRef,
  EventEmitter,
  FocusKeyManager,
  FocusMonitor,
  HostAttributeToken,
  InjectionToken,
  Input,
  JsonPipe,
  MatAnchor,
  MatButton,
  MatButtonModule,
  MatCommonModule,
  NgModule,
  NgZone,
  Output,
  QueryList,
  Renderer2,
  SPACE,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _StructuralStylesLoader,
  booleanAttribute,
  filter,
  hasModifierKey,
  inject,
  merge,
  numberAttribute,
  setClassMetadata,
  signal,
  startWith,
  take,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-QBB4LLCG.js";
import "./chunk-4MWRP73S.js";

// node_modules/@angular/cdk/fesm2022/accordion.mjs
var CDK_ACCORDION = new InjectionToken("CdkAccordion");
var CdkAccordion = class _CdkAccordion {
  /** Emits when the state of the accordion changes */
  _stateChanges = new Subject();
  /** Stream that emits true/false when openAll/closeAll is triggered. */
  _openCloseAllActions = new Subject();
  /** A readonly id value to use for unique selection coordination. */
  id = inject(_IdGenerator).getId("cdk-accordion-");
  /** Whether the accordion should allow multiple expanded accordion items simultaneously. */
  multi = false;
  /** Opens all enabled accordion items in an accordion where multi is enabled. */
  openAll() {
    if (this.multi) {
      this._openCloseAllActions.next(true);
    }
  }
  /** Closes all enabled accordion items. */
  closeAll() {
    this._openCloseAllActions.next(false);
  }
  ngOnChanges(changes) {
    this._stateChanges.next(changes);
  }
  ngOnDestroy() {
    this._stateChanges.complete();
    this._openCloseAllActions.complete();
  }
  static \u0275fac = function CdkAccordion_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAccordion)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkAccordion,
    selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]],
    inputs: {
      multi: [2, "multi", "multi", booleanAttribute]
    },
    exportAs: ["cdkAccordion"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_ACCORDION,
      useExisting: _CdkAccordion
    }]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordion, [{
    type: Directive,
    args: [{
      selector: "cdk-accordion, [cdkAccordion]",
      exportAs: "cdkAccordion",
      providers: [{
        provide: CDK_ACCORDION,
        useExisting: CdkAccordion
      }]
    }]
  }], null, {
    multi: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkAccordionItem = class _CdkAccordionItem {
  accordion = inject(CDK_ACCORDION, {
    optional: true,
    skipSelf: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  _expansionDispatcher = inject(UniqueSelectionDispatcher);
  /** Subscription to openAll/closeAll events. */
  _openCloseAllSubscription = Subscription.EMPTY;
  /** Event emitted every time the AccordionItem is closed. */
  closed = new EventEmitter();
  /** Event emitted every time the AccordionItem is opened. */
  opened = new EventEmitter();
  /** Event emitted when the AccordionItem is destroyed. */
  destroyed = new EventEmitter();
  /**
   * Emits whenever the expanded state of the accordion changes.
   * Primarily used to facilitate two-way binding.
   * @docs-private
   */
  expandedChange = new EventEmitter();
  /** The unique AccordionItem id. */
  id = inject(_IdGenerator).getId("cdk-accordion-child-");
  /** Whether the AccordionItem is expanded. */
  get expanded() {
    return this._expanded;
  }
  set expanded(expanded) {
    if (this._expanded !== expanded) {
      this._expanded = expanded;
      this.expandedChange.emit(expanded);
      if (expanded) {
        this.opened.emit();
        const accordionId = this.accordion ? this.accordion.id : this.id;
        this._expansionDispatcher.notify(this.id, accordionId);
      } else {
        this.closed.emit();
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  _expanded = false;
  /** Whether the AccordionItem is disabled. */
  disabled = false;
  /** Unregister function for _expansionDispatcher. */
  _removeUniqueSelectionListener = () => {
  };
  constructor() {
  }
  ngOnInit() {
    this._removeUniqueSelectionListener = this._expansionDispatcher.listen((id, accordionId) => {
      if (this.accordion && !this.accordion.multi && this.accordion.id === accordionId && this.id !== id) {
        this.expanded = false;
      }
    });
    if (this.accordion) {
      this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
    }
  }
  /** Emits an event for the accordion item being destroyed. */
  ngOnDestroy() {
    this.opened.complete();
    this.closed.complete();
    this.destroyed.emit();
    this.destroyed.complete();
    this._removeUniqueSelectionListener();
    this._openCloseAllSubscription.unsubscribe();
  }
  /** Toggles the expanded state of the accordion item. */
  toggle() {
    if (!this.disabled) {
      this.expanded = !this.expanded;
    }
  }
  /** Sets the expanded state of the accordion item to false. */
  close() {
    if (!this.disabled) {
      this.expanded = false;
    }
  }
  /** Sets the expanded state of the accordion item to true. */
  open() {
    if (!this.disabled) {
      this.expanded = true;
    }
  }
  _subscribeToOpenCloseAllActions() {
    return this.accordion._openCloseAllActions.subscribe((expanded) => {
      if (!this.disabled) {
        this.expanded = expanded;
      }
    });
  }
  static \u0275fac = function CdkAccordionItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAccordionItem)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkAccordionItem,
    selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]],
    inputs: {
      expanded: [2, "expanded", "expanded", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    outputs: {
      closed: "closed",
      opened: "opened",
      destroyed: "destroyed",
      expandedChange: "expandedChange"
    },
    exportAs: ["cdkAccordionItem"],
    features: [\u0275\u0275ProvidersFeature([
      // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
      // registering to the same accordion.
      {
        provide: CDK_ACCORDION,
        useValue: void 0
      }
    ])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordionItem, [{
    type: Directive,
    args: [{
      selector: "cdk-accordion-item, [cdkAccordionItem]",
      exportAs: "cdkAccordionItem",
      providers: [
        // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
        // registering to the same accordion.
        {
          provide: CDK_ACCORDION,
          useValue: void 0
        }
      ]
    }]
  }], () => [], {
    closed: [{
      type: Output
    }],
    opened: [{
      type: Output
    }],
    destroyed: [{
      type: Output
    }],
    expandedChange: [{
      type: Output
    }],
    expanded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkAccordionModule = class _CdkAccordionModule {
  static \u0275fac = function CdkAccordionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAccordionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CdkAccordionModule,
    imports: [CdkAccordion, CdkAccordionItem],
    exports: [CdkAccordion, CdkAccordionItem]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordionModule, [{
    type: NgModule,
    args: [{
      imports: [CdkAccordion, CdkAccordionItem],
      exports: [CdkAccordion, CdkAccordionItem]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/expansion.mjs
var _c0 = ["body"];
var _c1 = ["bodyWrapper"];
var _c2 = [[["mat-expansion-panel-header"]], "*", [["mat-action-row"]]];
var _c3 = ["mat-expansion-panel-header", "*", "mat-action-row"];
function MatExpansionPanel_ng_template_7_Template(rf, ctx) {
}
var _c4 = [[["mat-panel-title"]], [["mat-panel-description"]], "*"];
var _c5 = ["mat-panel-title", "mat-panel-description", "*"];
function MatExpansionPanelHeader_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 2);
    \u0275\u0275element(2, "path", 3);
    \u0275\u0275elementEnd()();
  }
}
var MAT_ACCORDION = new InjectionToken("MAT_ACCORDION");
var MAT_EXPANSION_PANEL = new InjectionToken("MAT_EXPANSION_PANEL");
var MatExpansionPanelContent = class _MatExpansionPanelContent {
  _template = inject(TemplateRef);
  _expansionPanel = inject(MAT_EXPANSION_PANEL, {
    optional: true
  });
  constructor() {
  }
  static \u0275fac = function MatExpansionPanelContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelContent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatExpansionPanelContent,
    selectors: [["ng-template", "matExpansionPanelContent", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[matExpansionPanelContent]"
    }]
  }], () => [], null);
})();
var MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new InjectionToken("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");
var MatExpansionPanel = class _MatExpansionPanel extends CdkAccordionItem {
  _viewContainerRef = inject(ViewContainerRef);
  _animationsDisabled = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  }) === "NoopAnimations";
  _document = inject(DOCUMENT);
  _ngZone = inject(NgZone);
  _elementRef = inject(ElementRef);
  _renderer = inject(Renderer2);
  _cleanupTransitionEnd;
  /** Whether the toggle indicator should be hidden. */
  get hideToggle() {
    return this._hideToggle || this.accordion && this.accordion.hideToggle;
  }
  set hideToggle(value) {
    this._hideToggle = value;
  }
  _hideToggle = false;
  /** The position of the expansion indicator. */
  get togglePosition() {
    return this._togglePosition || this.accordion && this.accordion.togglePosition;
  }
  set togglePosition(value) {
    this._togglePosition = value;
  }
  _togglePosition;
  /** An event emitted after the body's expansion animation happens. */
  afterExpand = new EventEmitter();
  /** An event emitted after the body's collapse animation happens. */
  afterCollapse = new EventEmitter();
  /** Stream that emits for changes in `@Input` properties. */
  _inputChanges = new Subject();
  /** Optionally defined accordion the expansion panel belongs to. */
  accordion = inject(MAT_ACCORDION, {
    optional: true,
    skipSelf: true
  });
  /** Content that will be rendered lazily. */
  _lazyContent;
  /** Element containing the panel's user-provided content. */
  _body;
  /** Element wrapping the panel body. */
  _bodyWrapper;
  /** Portal holding the user's content. */
  _portal;
  /** ID for the associated header element. Used for a11y labelling. */
  _headerId = inject(_IdGenerator).getId("mat-expansion-panel-header-");
  constructor() {
    super();
    const defaultOptions = inject(MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, {
      optional: true
    });
    this._expansionDispatcher = inject(UniqueSelectionDispatcher);
    if (defaultOptions) {
      this.hideToggle = defaultOptions.hideToggle;
    }
  }
  /** Determines whether the expansion panel should have spacing between it and its siblings. */
  _hasSpacing() {
    if (this.accordion) {
      return this.expanded && this.accordion.displayMode === "default";
    }
    return false;
  }
  /** Gets the expanded state string. */
  _getExpandedState() {
    return this.expanded ? "expanded" : "collapsed";
  }
  /** Toggles the expanded state of the expansion panel. */
  toggle() {
    this.expanded = !this.expanded;
  }
  /** Sets the expanded state of the expansion panel to false. */
  close() {
    this.expanded = false;
  }
  /** Sets the expanded state of the expansion panel to true. */
  open() {
    this.expanded = true;
  }
  ngAfterContentInit() {
    if (this._lazyContent && this._lazyContent._expansionPanel === this) {
      this.opened.pipe(startWith(null), filter(() => this.expanded && !this._portal), take(1)).subscribe(() => {
        this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef);
      });
    }
    this._setupAnimationEvents();
  }
  ngOnChanges(changes) {
    this._inputChanges.next(changes);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._cleanupTransitionEnd?.();
    this._inputChanges.complete();
  }
  /** Checks whether the expansion panel's content contains the currently-focused element. */
  _containsFocus() {
    if (this._body) {
      const focusedElement = this._document.activeElement;
      const bodyElement = this._body.nativeElement;
      return focusedElement === bodyElement || bodyElement.contains(focusedElement);
    }
    return false;
  }
  _transitionEndListener = ({
    target,
    propertyName
  }) => {
    if (target === this._bodyWrapper?.nativeElement && propertyName === "grid-template-rows") {
      this._ngZone.run(() => {
        if (this.expanded) {
          this.afterExpand.emit();
        } else {
          this.afterCollapse.emit();
        }
      });
    }
  };
  _setupAnimationEvents() {
    this._ngZone.runOutsideAngular(() => {
      if (this._animationsDisabled) {
        this.opened.subscribe(() => this._ngZone.run(() => this.afterExpand.emit()));
        this.closed.subscribe(() => this._ngZone.run(() => this.afterCollapse.emit()));
      } else {
        setTimeout(() => {
          const element = this._elementRef.nativeElement;
          this._cleanupTransitionEnd = this._renderer.listen(element, "transitionend", this._transitionEndListener);
          element.classList.add("mat-expansion-panel-animations-enabled");
        }, 200);
      }
    });
  }
  static \u0275fac = function MatExpansionPanel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanel)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatExpansionPanel,
    selectors: [["mat-expansion-panel"]],
    contentQueries: function MatExpansionPanel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatExpansionPanelContent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._lazyContent = _t.first);
      }
    },
    viewQuery: function MatExpansionPanel_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._body = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._bodyWrapper = _t.first);
      }
    },
    hostAttrs: [1, "mat-expansion-panel"],
    hostVars: 4,
    hostBindings: function MatExpansionPanel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-expanded", ctx.expanded)("mat-expansion-panel-spacing", ctx._hasSpacing());
      }
    },
    inputs: {
      hideToggle: [2, "hideToggle", "hideToggle", booleanAttribute],
      togglePosition: "togglePosition"
    },
    outputs: {
      afterExpand: "afterExpand",
      afterCollapse: "afterCollapse"
    },
    exportAs: ["matExpansionPanel"],
    features: [\u0275\u0275ProvidersFeature([
      // Provide MatAccordion as undefined to prevent nested expansion panels from registering
      // to the same accordion.
      {
        provide: MAT_ACCORDION,
        useValue: void 0
      },
      {
        provide: MAT_EXPANSION_PANEL,
        useExisting: _MatExpansionPanel
      }
    ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c3,
    decls: 9,
    vars: 4,
    consts: [["bodyWrapper", ""], ["body", ""], [1, "mat-expansion-panel-content-wrapper"], ["role", "region", 1, "mat-expansion-panel-content", 3, "id"], [1, "mat-expansion-panel-body"], [3, "cdkPortalOutlet"]],
    template: function MatExpansionPanel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c2);
        \u0275\u0275projection(0);
        \u0275\u0275elementStart(1, "div", 2, 0)(3, "div", 3, 1)(5, "div", 4);
        \u0275\u0275projection(6, 1);
        \u0275\u0275template(7, MatExpansionPanel_ng_template_7_Template, 0, 0, "ng-template", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275projection(8, 2);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275attribute("inert", ctx.expanded ? null : "");
        \u0275\u0275advance(2);
        \u0275\u0275property("id", ctx.id);
        \u0275\u0275attribute("aria-labelledby", ctx._headerId);
        \u0275\u0275advance(4);
        \u0275\u0275property("cdkPortalOutlet", ctx._portal);
      }
    },
    dependencies: [CdkPortalOutlet],
    styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;position:relative;background:var(--mat-expansion-container-background-color, var(--mat-sys-surface));color:var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));border-radius:var(--mat-expansion-container-shape, 12px)}.mat-expansion-panel.mat-expansion-panel-animations-enabled{transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape, 12px);border-top-left-radius:var(--mat-expansion-container-shape, 12px)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape, 12px);border-bottom-left-radius:var(--mat-expansion-container-shape, 12px)}@media(forced-colors: active){.mat-expansion-panel{outline:solid 1px}}.mat-expansion-panel-content-wrapper{display:grid;grid-template-rows:0fr;grid-template-columns:100%}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper{transition:grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{grid-template-rows:1fr}@supports not (grid-template-rows: 0fr){.mat-expansion-panel-content-wrapper{height:0}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{height:auto}}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;min-height:0;visibility:hidden;font-family:var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));line-height:var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));letter-spacing:var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content{transition:visibility 190ms linear}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper>.mat-expansion-panel-content{visibility:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color, var(--mat-sys-outline))}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanel, [{
    type: Component,
    args: [{
      selector: "mat-expansion-panel",
      exportAs: "matExpansionPanel",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [
        // Provide MatAccordion as undefined to prevent nested expansion panels from registering
        // to the same accordion.
        {
          provide: MAT_ACCORDION,
          useValue: void 0
        },
        {
          provide: MAT_EXPANSION_PANEL,
          useExisting: MatExpansionPanel
        }
      ],
      host: {
        "class": "mat-expansion-panel",
        "[class.mat-expanded]": "expanded",
        "[class.mat-expansion-panel-spacing]": "_hasSpacing()"
      },
      imports: [CdkPortalOutlet],
      template: `<ng-content select="mat-expansion-panel-header"></ng-content>
<div class="mat-expansion-panel-content-wrapper" [attr.inert]="expanded ? null : ''" #bodyWrapper>
  <div class="mat-expansion-panel-content"
       role="region"
       [attr.aria-labelledby]="_headerId"
       [id]="id"
       #body>
    <div class="mat-expansion-panel-body">
      <ng-content></ng-content>
      <ng-template [cdkPortalOutlet]="_portal"></ng-template>
    </div>
    <ng-content select="mat-action-row"></ng-content>
  </div>
</div>
`,
      styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;position:relative;background:var(--mat-expansion-container-background-color, var(--mat-sys-surface));color:var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));border-radius:var(--mat-expansion-container-shape, 12px)}.mat-expansion-panel.mat-expansion-panel-animations-enabled{transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape, 12px);border-top-left-radius:var(--mat-expansion-container-shape, 12px)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape, 12px);border-bottom-left-radius:var(--mat-expansion-container-shape, 12px)}@media(forced-colors: active){.mat-expansion-panel{outline:solid 1px}}.mat-expansion-panel-content-wrapper{display:grid;grid-template-rows:0fr;grid-template-columns:100%}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper{transition:grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{grid-template-rows:1fr}@supports not (grid-template-rows: 0fr){.mat-expansion-panel-content-wrapper{height:0}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{height:auto}}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;min-height:0;visibility:hidden;font-family:var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));line-height:var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));letter-spacing:var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content{transition:visibility 190ms linear}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper>.mat-expansion-panel-content{visibility:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color, var(--mat-sys-outline))}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
    }]
  }], () => [], {
    hideToggle: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    togglePosition: [{
      type: Input
    }],
    afterExpand: [{
      type: Output
    }],
    afterCollapse: [{
      type: Output
    }],
    _lazyContent: [{
      type: ContentChild,
      args: [MatExpansionPanelContent]
    }],
    _body: [{
      type: ViewChild,
      args: ["body"]
    }],
    _bodyWrapper: [{
      type: ViewChild,
      args: ["bodyWrapper"]
    }]
  });
})();
var MatExpansionPanelActionRow = class _MatExpansionPanelActionRow {
  static \u0275fac = function MatExpansionPanelActionRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelActionRow)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatExpansionPanelActionRow,
    selectors: [["mat-action-row"]],
    hostAttrs: [1, "mat-action-row"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelActionRow, [{
    type: Directive,
    args: [{
      selector: "mat-action-row",
      host: {
        class: "mat-action-row"
      }
    }]
  }], null, null);
})();
var MatExpansionPanelHeader = class _MatExpansionPanelHeader {
  panel = inject(MatExpansionPanel, {
    host: true
  });
  _element = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _parentChangeSubscription = Subscription.EMPTY;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const panel = this.panel;
    const defaultOptions = inject(MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, {
      optional: true
    });
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    const accordionHideToggleChange = panel.accordion ? panel.accordion._stateChanges.pipe(filter((changes) => !!(changes["hideToggle"] || changes["togglePosition"]))) : EMPTY;
    this.tabIndex = parseInt(tabIndex || "") || 0;
    this._parentChangeSubscription = merge(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe(filter((changes) => {
      return !!(changes["hideToggle"] || changes["disabled"] || changes["togglePosition"]);
    }))).subscribe(() => this._changeDetectorRef.markForCheck());
    panel.closed.pipe(filter(() => panel._containsFocus())).subscribe(() => this._focusMonitor.focusVia(this._element, "program"));
    if (defaultOptions) {
      this.expandedHeight = defaultOptions.expandedHeight;
      this.collapsedHeight = defaultOptions.collapsedHeight;
    }
  }
  /** Height of the header while the panel is expanded. */
  expandedHeight;
  /** Height of the header while the panel is collapsed. */
  collapsedHeight;
  /** Tab index of the header. */
  tabIndex = 0;
  /**
   * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
   * @docs-private
   */
  get disabled() {
    return this.panel.disabled;
  }
  /** Toggles the expanded state of the panel. */
  _toggle() {
    if (!this.disabled) {
      this.panel.toggle();
    }
  }
  /** Gets whether the panel is expanded. */
  _isExpanded() {
    return this.panel.expanded;
  }
  /** Gets the expanded state string of the panel. */
  _getExpandedState() {
    return this.panel._getExpandedState();
  }
  /** Gets the panel id. */
  _getPanelId() {
    return this.panel.id;
  }
  /** Gets the toggle position for the header. */
  _getTogglePosition() {
    return this.panel.togglePosition;
  }
  /** Gets whether the expand indicator should be shown. */
  _showToggle() {
    return !this.panel.hideToggle && !this.panel.disabled;
  }
  /**
   * Gets the current height of the header. Null if no custom height has been
   * specified, and if the default height from the stylesheet should be used.
   */
  _getHeaderHeight() {
    const isExpanded = this._isExpanded();
    if (isExpanded && this.expandedHeight) {
      return this.expandedHeight;
    } else if (!isExpanded && this.collapsedHeight) {
      return this.collapsedHeight;
    }
    return null;
  }
  /** Handle keydown event calling to toggle() if appropriate. */
  _keydown(event) {
    switch (event.keyCode) {
      // Toggle for space and enter keys.
      case SPACE:
      case ENTER:
        if (!hasModifierKey(event)) {
          event.preventDefault();
          this._toggle();
        }
        break;
      default:
        if (this.panel.accordion) {
          this.panel.accordion._handleHeaderKeydown(event);
        }
        return;
    }
  }
  /**
   * Focuses the panel header. Implemented as a part of `FocusableOption`.
   * @param origin Origin of the action that triggered the focus.
   * @docs-private
   */
  focus(origin, options) {
    if (origin) {
      this._focusMonitor.focusVia(this._element, origin, options);
    } else {
      this._element.nativeElement.focus(options);
    }
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._element).subscribe((origin) => {
      if (origin && this.panel.accordion) {
        this.panel.accordion._handleHeaderFocus(this);
      }
    });
  }
  ngOnDestroy() {
    this._parentChangeSubscription.unsubscribe();
    this._focusMonitor.stopMonitoring(this._element);
  }
  static \u0275fac = function MatExpansionPanelHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelHeader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatExpansionPanelHeader,
    selectors: [["mat-expansion-panel-header"]],
    hostAttrs: ["role", "button", 1, "mat-expansion-panel-header", "mat-focus-indicator"],
    hostVars: 13,
    hostBindings: function MatExpansionPanelHeader_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatExpansionPanelHeader_click_HostBindingHandler() {
          return ctx._toggle();
        })("keydown", function MatExpansionPanelHeader_keydown_HostBindingHandler($event) {
          return ctx._keydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.panel._headerId)("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("aria-controls", ctx._getPanelId())("aria-expanded", ctx._isExpanded())("aria-disabled", ctx.panel.disabled);
        \u0275\u0275styleProp("height", ctx._getHeaderHeight());
        \u0275\u0275classProp("mat-expanded", ctx._isExpanded())("mat-expansion-toggle-indicator-after", ctx._getTogglePosition() === "after")("mat-expansion-toggle-indicator-before", ctx._getTogglePosition() === "before");
      }
    },
    inputs: {
      expandedHeight: "expandedHeight",
      collapsedHeight: "collapsedHeight",
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)]
    },
    ngContentSelectors: _c5,
    decls: 5,
    vars: 3,
    consts: [[1, "mat-content"], [1, "mat-expansion-indicator"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 -960 960 960", "aria-hidden", "true", "focusable", "false"], ["d", "M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],
    template: function MatExpansionPanelHeader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c4);
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275projection(1);
        \u0275\u0275projection(2, 1);
        \u0275\u0275projection(3, 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, MatExpansionPanelHeader_Conditional_4_Template, 3, 0, "span", 1);
      }
      if (rf & 2) {
        \u0275\u0275classProp("mat-content-hide-toggle", !ctx._showToggle());
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx._showToggle() ? 4 : -1);
      }
    },
    styles: ['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;height:var(--mat-expansion-header-collapsed-state-height, 48px);font-family:var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));font-size:var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));font-weight:var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));line-height:var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));letter-spacing:var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-header{transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header::before{border-radius:inherit}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height, 64px)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color, var(--mat-sys-surface))}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color, var(--mat-sys-on-surface))}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant))}.mat-expansion-panel-animations-enabled .mat-expansion-indicator{transition:transform 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator{transform:rotate(180deg)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-legacy-header-indicator-display, none)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-header-indicator-display, inline-block)}@media(forced-colors: active){.mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelHeader, [{
    type: Component,
    args: [{
      selector: "mat-expansion-panel-header",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mat-expansion-panel-header mat-focus-indicator",
        "role": "button",
        "[attr.id]": "panel._headerId",
        "[attr.tabindex]": "disabled ? -1 : tabIndex",
        "[attr.aria-controls]": "_getPanelId()",
        "[attr.aria-expanded]": "_isExpanded()",
        "[attr.aria-disabled]": "panel.disabled",
        "[class.mat-expanded]": "_isExpanded()",
        "[class.mat-expansion-toggle-indicator-after]": `_getTogglePosition() === 'after'`,
        "[class.mat-expansion-toggle-indicator-before]": `_getTogglePosition() === 'before'`,
        "[style.height]": "_getHeaderHeight()",
        "(click)": "_toggle()",
        "(keydown)": "_keydown($event)"
      },
      template: '<span class="mat-content" [class.mat-content-hide-toggle]="!_showToggle()">\n  <ng-content select="mat-panel-title"></ng-content>\n  <ng-content select="mat-panel-description"></ng-content>\n  <ng-content></ng-content>\n</span>\n\n@if (_showToggle()) {\n  <span class="mat-expansion-indicator">\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 -960 960 960"\n      aria-hidden="true"\n      focusable="false">\n      <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/>\n    </svg>\n  </span>\n}\n',
      styles: ['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;height:var(--mat-expansion-header-collapsed-state-height, 48px);font-family:var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));font-size:var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));font-weight:var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));line-height:var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));letter-spacing:var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-header{transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header::before{border-radius:inherit}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height, 64px)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color, var(--mat-sys-surface))}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color, var(--mat-sys-on-surface))}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant))}.mat-expansion-panel-animations-enabled .mat-expansion-indicator{transition:transform 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator{transform:rotate(180deg)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-legacy-header-indicator-display, none)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-header-indicator-display, inline-block)}@media(forced-colors: active){.mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}}\n']
    }]
  }], () => [], {
    expandedHeight: [{
      type: Input
    }],
    collapsedHeight: [{
      type: Input
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }]
  });
})();
var MatExpansionPanelDescription = class _MatExpansionPanelDescription {
  static \u0275fac = function MatExpansionPanelDescription_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelDescription)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatExpansionPanelDescription,
    selectors: [["mat-panel-description"]],
    hostAttrs: [1, "mat-expansion-panel-header-description"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelDescription, [{
    type: Directive,
    args: [{
      selector: "mat-panel-description",
      host: {
        class: "mat-expansion-panel-header-description"
      }
    }]
  }], null, null);
})();
var MatExpansionPanelTitle = class _MatExpansionPanelTitle {
  static \u0275fac = function MatExpansionPanelTitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelTitle)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatExpansionPanelTitle,
    selectors: [["mat-panel-title"]],
    hostAttrs: [1, "mat-expansion-panel-header-title"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelTitle, [{
    type: Directive,
    args: [{
      selector: "mat-panel-title",
      host: {
        class: "mat-expansion-panel-header-title"
      }
    }]
  }], null, null);
})();
var MatAccordion = class _MatAccordion extends CdkAccordion {
  _keyManager;
  /** Headers belonging to this accordion. */
  _ownHeaders = new QueryList();
  /** All headers inside the accordion. Includes headers inside nested accordions. */
  _headers;
  /** Whether the expansion indicator should be hidden. */
  hideToggle = false;
  /**
   * Display mode used for all expansion panels in the accordion. Currently two display
   * modes exist:
   *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
   *     panel at a different elevation from the rest of the accordion.
   *  flat - no spacing is placed around expanded panels, showing all panels at the same
   *     elevation.
   */
  displayMode = "default";
  /** The position of the expansion indicator. */
  togglePosition = "after";
  ngAfterContentInit() {
    this._headers.changes.pipe(startWith(this._headers)).subscribe((headers) => {
      this._ownHeaders.reset(headers.filter((header) => header.panel.accordion === this));
      this._ownHeaders.notifyOnChanges();
    });
    this._keyManager = new FocusKeyManager(this._ownHeaders).withWrap().withHomeAndEnd();
  }
  /** Handles keyboard events coming in from the panel headers. */
  _handleHeaderKeydown(event) {
    this._keyManager.onKeydown(event);
  }
  _handleHeaderFocus(header) {
    this._keyManager.updateActiveItem(header);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._keyManager?.destroy();
    this._ownHeaders.destroy();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatAccordion_BaseFactory;
    return function MatAccordion_Factory(__ngFactoryType__) {
      return (\u0275MatAccordion_BaseFactory || (\u0275MatAccordion_BaseFactory = \u0275\u0275getInheritedFactory(_MatAccordion)))(__ngFactoryType__ || _MatAccordion);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatAccordion,
    selectors: [["mat-accordion"]],
    contentQueries: function MatAccordion_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatExpansionPanelHeader, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._headers = _t);
      }
    },
    hostAttrs: [1, "mat-accordion"],
    hostVars: 2,
    hostBindings: function MatAccordion_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-accordion-multi", ctx.multi);
      }
    },
    inputs: {
      hideToggle: [2, "hideToggle", "hideToggle", booleanAttribute],
      displayMode: "displayMode",
      togglePosition: "togglePosition"
    },
    exportAs: ["matAccordion"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_ACCORDION,
      useExisting: _MatAccordion
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAccordion, [{
    type: Directive,
    args: [{
      selector: "mat-accordion",
      exportAs: "matAccordion",
      providers: [{
        provide: MAT_ACCORDION,
        useExisting: MatAccordion
      }],
      host: {
        class: "mat-accordion",
        // Class binding which is only used by the test harness as there is no other
        // way for the harness to detect if multiple panel support is enabled.
        "[class.mat-accordion-multi]": "this.multi"
      }
    }]
  }], null, {
    _headers: [{
      type: ContentChildren,
      args: [MatExpansionPanelHeader, {
        descendants: true
      }]
    }],
    hideToggle: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    displayMode: [{
      type: Input
    }],
    togglePosition: [{
      type: Input
    }]
  });
})();
var MatExpansionModule = class _MatExpansionModule {
  static \u0275fac = function MatExpansionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatExpansionModule,
    imports: [MatCommonModule, CdkAccordionModule, PortalModule, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent],
    exports: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, CdkAccordionModule, PortalModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CdkAccordionModule, PortalModule, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent],
      exports: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]
    }]
  }], null, null);
})();

// src/app/shared/components/review-action-dialog/review-action-dialog.component.ts
function ReviewActionDialogComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("color", ctx_r0.data.iconColor || "#d97706");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.data.icon);
  }
}
function ReviewActionDialogComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Please enter at least ", ctx_r0.data.minLength, " characters.");
  }
}
function ReviewActionDialogComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function ReviewActionDialogComponent_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submit());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.data.confirmLabel);
  }
}
function ReviewActionDialogComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function ReviewActionDialogComponent_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submit());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.data.confirmLabel);
  }
}
function ReviewActionDialogComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function ReviewActionDialogComponent_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submit());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.data.confirmLabel);
  }
}
function ReviewActionDialogComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function ReviewActionDialogComponent_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submit());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.data.confirmLabel);
  }
}
var ReviewActionDialogComponent = class _ReviewActionDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
    this.ref = inject(MatDialogRef);
    this.text = new FormControl("", { nonNullable: true });
    this.submitted = false;
    const d = this.data;
    this.text.setValidators([Validators.required, Validators.minLength(d.minLength)]);
  }
  submit() {
    this.submitted = true;
    this.text.markAsTouched();
    if (this.text.invalid) {
      return;
    }
    this.ref.close(this.text.value.trim());
  }
  static {
    this.\u0275fac = function ReviewActionDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReviewActionDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReviewActionDialogComponent, selectors: [["app-review-action-dialog"]], decls: 20, vars: 9, consts: [[1, "dlg"], [1, "head"], [1, "ico", 3, "color"], ["mat-dialog-title", "", 1, "ttl"], ["appearance", "outline", 1, "full"], ["matInput", "", "rows", "6", 3, "formControl", "placeholder"], ["align", "end"], [1, "err"], ["type", "button", "mat-stroked-button", "", "mat-dialog-close", "", 1, "ciq-btn-secondary"], ["type", "button", "mat-flat-button", "", 1, "ciq-btn-success"], ["type", "button", "mat-flat-button", "", 1, "ciq-btn-warning"], ["type", "button", "mat-flat-button", "", "color", "warn"], ["type", "button", "mat-flat-button", "", "color", "primary"], [1, "ico"], ["type", "button", "mat-flat-button", "", 1, "ciq-btn-success", 3, "click"], ["type", "button", "mat-flat-button", "", 1, "ciq-btn-warning", 3, "click"], ["type", "button", "mat-flat-button", "", "color", "warn", 3, "click"], ["type", "button", "mat-flat-button", "", "color", "primary", 3, "click"]], template: function ReviewActionDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, ReviewActionDialogComponent_Conditional_2_Template, 2, 3, "span", 2);
        \u0275\u0275elementStart(3, "h2", 3);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "mat-dialog-content")(6, "mat-form-field", 4)(7, "mat-label");
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "textarea", 5);
        \u0275\u0275elementStart(10, "mat-hint", 6);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(12, ReviewActionDialogComponent_Conditional_12_Template, 2, 1, "p", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-dialog-actions", 6)(14, "button", 8);
        \u0275\u0275text(15, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275template(16, ReviewActionDialogComponent_Conditional_16_Template, 2, 1, "button", 9)(17, ReviewActionDialogComponent_Conditional_17_Template, 2, 1, "button", 10)(18, ReviewActionDialogComponent_Conditional_18_Template, 2, 1, "button", 11)(19, ReviewActionDialogComponent_Conditional_19_Template, 2, 1, "button", 12);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.data.icon ? 2 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.data.title);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.data.textareaLabel);
        \u0275\u0275advance();
        \u0275\u0275property("formControl", ctx.text)("placeholder", ctx.data.placeholder);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("", (ctx.text.value || "").length, " characters (min ", ctx.data.minLength, ")");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.submitted && ctx.text.invalid ? 12 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.data.confirmColor === "success" ? 16 : ctx.data.confirmColor === "warning" ? 17 : ctx.data.confirmColor === "warn" ? 18 : 19);
      }
    }, dependencies: [MatDialogModule, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, MatButtonModule, MatButton, MatFormFieldModule, MatFormField, MatLabel, MatHint, MatInputModule, MatInput, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, FormControlDirective], styles: ["\n\n.dlg[_ngcontent-%COMP%] {\n  padding-top: 4px;\n}\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ico[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.ttl[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n}\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 8px;\n}\n.err[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  font-size: 13px;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=review-action-dialog.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReviewActionDialogComponent, [{
    type: Component,
    args: [{ selector: "app-review-action-dialog", standalone: true, imports: [
      MatDialogModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule
    ], template: `
    <div class="dlg">
      <div class="head">
        @if (data.icon) {
          <span class="ico" [style.color]="data.iconColor || '#d97706'">{{ data.icon }}</span>
        }
        <h2 mat-dialog-title class="ttl">{{ data.title }}</h2>
      </div>
      <mat-dialog-content>
        <mat-form-field appearance="outline" class="full">
          <mat-label>{{ data.textareaLabel }}</mat-label>
          <textarea matInput rows="6" [formControl]="text" [placeholder]="data.placeholder"></textarea>
          <mat-hint align="end">{{ (text.value || '').length }} characters (min {{ data.minLength }})</mat-hint>
        </mat-form-field>
        @if (submitted && text.invalid) {
          <p class="err">Please enter at least {{ data.minLength }} characters.</p>
        }
      </mat-dialog-content>
      <mat-dialog-actions align="end">
        <button type="button" mat-stroked-button class="ciq-btn-secondary" mat-dialog-close>Cancel</button>
        @if (data.confirmColor === 'success') {
          <button type="button" mat-flat-button class="ciq-btn-success" (click)="submit()">{{ data.confirmLabel }}</button>
        } @else if (data.confirmColor === 'warning') {
          <button type="button" mat-flat-button class="ciq-btn-warning" (click)="submit()">{{ data.confirmLabel }}</button>
        } @else if (data.confirmColor === 'warn') {
          <button type="button" mat-flat-button color="warn" (click)="submit()">{{ data.confirmLabel }}</button>
        } @else {
          <button type="button" mat-flat-button color="primary" (click)="submit()">{{ data.confirmLabel }}</button>
        }
      </mat-dialog-actions>
    </div>
  `, styles: ["/* angular:styles/component:scss;7b082a8a65a5747e4fb4b8b7a3c62931ef0a22dd6a0c1a32238bed20351261ee;D:/CMSV1/frontend/src/app/shared/components/review-action-dialog/review-action-dialog.component.ts */\n.dlg {\n  padding-top: 4px;\n}\n.head {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ico {\n  font-size: 28px;\n}\n.ttl {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n}\n.full {\n  width: 100%;\n  margin-top: 8px;\n}\n.err {\n  color: #b91c1c;\n  font-size: 13px;\n  margin: 0 0 8px;\n}\n/*# sourceMappingURL=review-action-dialog.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReviewActionDialogComponent, { className: "ReviewActionDialogComponent", filePath: "src/app/shared/components/review-action-dialog/review-action-dialog.component.ts", lineNumber: 91 });
})();

// src/app/features/checker/consent-review/consent-review.component.ts
var _c02 = () => [];
var _forTrack0 = ($index, $item) => $item.fieldName;
function ConsentReviewComponent_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u21A9 This consent may have prior revisions on record (v", c_r2.version, ").");
  }
}
function ConsentReviewComponent_Conditional_0_For_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u270F\uFE0F Modified \xB7 ", d_r3.fieldLabel, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r3.newValue);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Was: ", d_r3.oldValue, "");
  }
}
function ConsentReviewComponent_Conditional_0_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1, "No version rows.");
    \u0275\u0275elementEnd();
  }
}
function ConsentReviewComponent_Conditional_0_Conditional_86_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "pre");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "json");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const v_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, v_r5));
  }
}
function ConsentReviewComponent_Conditional_0_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 21);
    \u0275\u0275repeaterCreate(1, ConsentReviewComponent_Conditional_0_Conditional_86_For_2_Template, 4, 3, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.versions());
  }
}
function ConsentReviewComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
    \u0275\u0275text(3, "\u2190 Pending Approvals");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 3)(5, "h1");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 4);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 5)(10, "div", 6);
    \u0275\u0275text(11, "\u2705 CHECKER REVIEW MODE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 7);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ConsentReviewComponent_Conditional_0_Conditional_14_Template, 2, 1, "p", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "span", 11);
    \u0275\u0275text(18, "Consent Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 12);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 10)(22, "span", 11);
    \u0275\u0275text(23, "Consent ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 13);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 10)(27, "span", 11);
    \u0275\u0275text(28, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 12);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 10)(32, "span", 11);
    \u0275\u0275text(33, "Validity Period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 12);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 10)(37, "span", 11);
    \u0275\u0275text(38, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 12);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 10)(42, "span", 11);
    \u0275\u0275text(43, "Version");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 12);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 10)(47, "span", 11);
    \u0275\u0275text(48, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 12);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 10)(52, "span", 11);
    \u0275\u0275text(53, "Delivery Channels");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 12);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 14)(57, "span", 11);
    \u0275\u0275text(58, "Tags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 12);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 10)(62, "span", 11);
    \u0275\u0275text(63, "Submitted At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "span", 12);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 10)(67, "span", 11);
    \u0275\u0275text(68, "Created By");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span", 12);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(71, ConsentReviewComponent_Conditional_0_For_72_Template, 7, 3, "div", 15, _forTrack0);
    \u0275\u0275elementStart(73, "div", 16)(74, "div", 17)(75, "h2");
    \u0275\u0275text(76, "Consent Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "button", 18);
    \u0275\u0275listener("click", function ConsentReviewComponent_Conditional_0_Template_button_click_77_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.fullPreview());
    });
    \u0275\u0275text(78, "\u{1F441} Preview in Full");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(79, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "mat-accordion")(81, "mat-expansion-panel")(82, "mat-expansion-panel-header")(83, "mat-panel-title");
    \u0275\u0275text(84, "Version history");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(85, ConsentReviewComponent_Conditional_0_Conditional_85_Template, 2, 0, "p", 20)(86, ConsentReviewComponent_Conditional_0_Conditional_86_Template, 3, 0, "ul", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(87, "div", 22);
    \u0275\u0275elementStart(88, "div", 23)(89, "div")(90, "div", 24);
    \u0275\u0275text(91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "div", 25);
    \u0275\u0275text(93, "Your decision will be logged and the maker will be notified.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div", 26)(95, "button", 27);
    \u0275\u0275listener("click", function ConsentReviewComponent_Conditional_0_Template_button_click_95_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.approve());
    });
    \u0275\u0275text(96, "\u2705 Approve");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "button", 28);
    \u0275\u0275listener("click", function ConsentReviewComponent_Conditional_0_Template_button_click_97_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.requestRevision());
    });
    \u0275\u0275text(98, " \u21A9 Request Revision ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "button", 29);
    \u0275\u0275listener("click", function ConsentReviewComponent_Conditional_0_Template_button_click_99_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.reject());
    });
    \u0275\u0275text(100, "\u274C Reject");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const c_r2 = ctx;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Reviewing: ", c_r2.consentName, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.consentId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" You are reviewing a consent submitted by ", (c_r2.createdBy == null ? null : c_r2.createdBy.fullName) || "\u2014", " \xB7 ", c_r2.submittedAt, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r2.version > 1 ? 14 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(c_r2.consentName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r2.consentId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r2.category);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", c_r2.validityPeriodDays, " days");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r2.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r2.version);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r2.type);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((c_r2.deliveryChannels || \u0275\u0275pureFunction0(25, _c02)).join(", "));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((c_r2.tagsUsed || \u0275\u0275pureFunction0(26, _c02)).join(", ") || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r2.submittedAt);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r2.createdBy == null ? null : c_r2.createdBy.fullName);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.diff());
    \u0275\u0275advance(8);
    \u0275\u0275property("innerHTML", ctx_r3.messageHtml(), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(!ctx_r3.versions().length ? 85 : 86);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("dim", !ctx_r3.canDecide());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Make your decision for: ", c_r2.consentName, " v", c_r2.version, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r3.canDecide() || ctx_r3.busy());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r3.canDecide() || ctx_r3.busy());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r3.canDecide() || ctx_r3.busy());
  }
}
var ConsentReviewComponent = class _ConsentReviewComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.api = inject(ConsentService);
    this.mergeApi = inject(MergeTagService);
    this.dialog = inject(MatDialog);
    this.notify = inject(NotificationService);
    this.sanitizer = inject(DomSanitizer);
    this.consent = signal(null);
    this.diff = signal([]);
    this.versions = signal([]);
    this.busy = signal(false);
    this.mergeTags = [];
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.mergeApi.getMergeTags().subscribe({
      next: (t) => this.mergeTags = t,
      error: () => {
      }
    });
    this.api.getConsentById(id).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.consent.set(res.data);
        }
      }
    });
    this.api.getConsentDiff(id).subscribe({
      next: (res) => {
        if (res.success && res.data?.differences) {
          this.diff.set(res.data.differences.filter((d) => d.isModified));
        }
      }
    });
    this.api.getVersionHistory(id).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.versions.set(res.data);
        }
      }
    });
  }
  messageHtml() {
    const raw = this.consent()?.consentMessage || "";
    let html = raw;
    for (const t of this.mergeTags) {
      const key = t.tagKey.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      html = html.replace(new RegExp(key, "g"), t.sampleValue || "");
    }
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  fullPreview() {
    const c = this.consent();
    if (!c) {
      return;
    }
    const data = {
      html: c.consentMessage || "",
      mergeTags: this.mergeTags
    };
    this.dialog.open(ConsentPreviewDialogComponent, { width: "760px", data });
  }
  approve() {
    const c = this.consent();
    if (!c) {
      return;
    }
    const data = {
      icon: "\u2705",
      iconColor: "rgba(22,163,74,0.15)",
      title: "Approve this Consent?",
      body: `'${c.consentName}' will be marked as Approved and made ready to publish. This action will notify the maker.`,
      cancelLabel: "Cancel",
      confirmLabel: "Confirm Approval",
      confirmColor: "success"
    };
    const ref = this.dialog.open(ConfirmDialogComponent, { width: "460px", disableClose: true, data });
    ref.afterClosed().subscribe((ok) => {
      if (!ok) {
        return;
      }
      this.busy.set(true);
      this.api.reviewConsent(c.id, "APPROVE").subscribe({
        next: (res) => {
          this.busy.set(false);
          if (res.success) {
            this.notify.success("\u2705 Consent approved successfully!", res.message);
            setTimeout(() => void this.router.navigateByUrl("/checker/pending"), 1500);
          }
        },
        error: () => {
          this.busy.set(false);
        }
      });
    });
  }
  requestRevision() {
    const c = this.consent();
    if (!c) {
      return;
    }
    const data = {
      title: "Request Revision",
      icon: "\u21A9",
      iconColor: "#d97706",
      textareaLabel: "What needs to be changed?",
      placeholder: "Be specific \u2014 describe exactly what the maker should update\u2026",
      confirmLabel: "Send Revision Request",
      confirmColor: "warning",
      minLength: 20
    };
    const ref = this.dialog.open(ReviewActionDialogComponent, { width: "520px", disableClose: true, data });
    ref.afterClosed().subscribe((msg) => {
      if (!msg) {
        return;
      }
      this.busy.set(true);
      this.api.reviewConsent(c.id, "REQUEST_REVISION", void 0, msg).subscribe({
        next: (res) => {
          this.busy.set(false);
          if (res.success) {
            this.notify.warning("\u21A9 Revision request sent to maker.", res.message);
            setTimeout(() => void this.router.navigateByUrl("/checker/pending"), 1200);
          }
        },
        error: () => {
          this.busy.set(false);
        }
      });
    });
  }
  reject() {
    const c = this.consent();
    if (!c) {
      return;
    }
    const data = {
      title: "Reject this Consent",
      icon: "\u274C",
      iconColor: "#dc2626",
      textareaLabel: "Reason for rejection",
      placeholder: "Provide a clear reason so the maker understands why this was rejected\u2026",
      confirmLabel: "Confirm Rejection",
      confirmColor: "warn",
      minLength: 20
    };
    const ref = this.dialog.open(ReviewActionDialogComponent, { width: "520px", disableClose: true, data });
    ref.afterClosed().subscribe((reason) => {
      if (!reason) {
        return;
      }
      this.busy.set(true);
      this.api.reviewConsent(c.id, "REJECT", reason).subscribe({
        next: (res) => {
          this.busy.set(false);
          if (res.success) {
            this.notify.error("\u274C Consent rejected.", res.message || "");
            setTimeout(() => void this.router.navigateByUrl("/checker/pending"), 1200);
          }
        },
        error: () => {
          this.busy.set(false);
        }
      });
    });
  }
  canDecide() {
    return this.consent()?.status === "PENDING_APPROVAL";
  }
  static {
    this.\u0275fac = function ConsentReviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConsentReviewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsentReviewComponent, selectors: [["app-consent-review"]], decls: 1, vars: 1, consts: [[1, "page"], [1, "subnav"], ["mat-stroked-button", "", "routerLink", "/checker/pending"], [1, "title-row"], [1, "pill-id"], [1, "mode-card"], [1, "mode-title"], [1, "mode-sub"], [1, "mode-note"], [1, "grid"], [1, "field"], [1, "k"], [1, "v"], [1, "v", "mono"], [1, "field", "full"], [1, "diff-box"], [1, "msg-card"], [1, "msg-head"], ["mat-stroked-button", "", "type", "button", 3, "click"], [1, "msg-body", 3, "innerHTML"], [1, "muted"], [1, "ver-list"], [1, "spacer"], [1, "decision"], [1, "d-title"], [1, "d-sub"], [1, "d-btns"], ["mat-flat-button", "", 1, "ciq-btn-success", "ap", 3, "click", "disabled"], ["mat-stroked-button", "", 1, "ciq-btn-warning", "rev", 3, "click", "disabled"], ["mat-stroked-button", "", "color", "warn", 3, "click", "disabled"], [1, "diff-title"], [1, "diff-new"], [1, "diff-old"]], template: function ConsentReviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ConsentReviewComponent_Conditional_0_Template, 101, 27, "div", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.consent()) ? 0 : -1, tmp_0_0);
      }
    }, dependencies: [RouterLink, MatButtonModule, MatAnchor, MatButton, MatExpansionModule, MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, JsonPipe], styles: ['\n\n.page[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 0 auto 120px;\n}\n.subnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #6366f1;\n  font-weight: 600;\n}\n.title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin: 12px 0 16px;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 800;\n}\n.pill-id[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: #f1f5f9;\n  color: #475569;\n  font-family: "JetBrains Mono", monospace;\n}\n.mode-card[_ngcontent-%COMP%] {\n  border-left: 4px solid #6366f1;\n  background: #eef2ff;\n  border-radius: 10px;\n  padding: 14px 16px;\n  margin-bottom: 20px;\n}\n.mode-title[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: #312e81;\n}\n.mode-sub[_ngcontent-%COMP%], \n.mode-note[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  font-size: 14px;\n  color: #4338ca;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n  margin-bottom: 16px;\n}\n@media (max-width: 700px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.field[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 10px 12px;\n}\n.field.full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.k[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: #94a3b8;\n}\n.v[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #0f172a;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: "JetBrains Mono", monospace;\n}\n.diff-box[_ngcontent-%COMP%] {\n  border: 1px solid #fcd34d;\n  background: #fffbeb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 10px;\n}\n.diff-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #92400e;\n  font-size: 13px;\n}\n.diff-new[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-weight: 600;\n}\n.diff-old[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  margin-top: 4px;\n}\n.msg-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 16px;\n  margin: 16px 0;\n}\n.msg-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.msg-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n}\n.msg-body[_ngcontent-%COMP%] {\n  background: #fafafa;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 24px;\n  min-height: 150px;\n  line-height: 1.7;\n  font-size: 15px;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.ver-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.ver-list[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  font-size: 12px;\n}\n.spacer[_ngcontent-%COMP%] {\n  height: 100px;\n}\n.decision[_ngcontent-%COMP%] {\n  position: fixed;\n  left: var(--sidebar-width);\n  right: 0;\n  bottom: 0;\n  z-index: 30;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  padding: 20px 32px;\n  background: #fff;\n  box-shadow: 0 -6px 20px rgba(0, 0, 0, 0.08);\n}\n@media (max-width: 900px) {\n  .decision[_ngcontent-%COMP%] {\n    left: 0;\n  }\n}\n.decision.dim[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.d-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.d-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  margin-top: 4px;\n}\n.d-btns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.ap[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n.rev[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n/*# sourceMappingURL=consent-review.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsentReviewComponent, [{
    type: Component,
    args: [{ selector: "app-consent-review", standalone: true, imports: [RouterLink, MatButtonModule, MatExpansionModule, JsonPipe], template: `@if (consent(); as c) {\r
  <div class="page">\r
    <div class="subnav">\r
      <a mat-stroked-button routerLink="/checker/pending">\u2190 Pending Approvals</a>\r
    </div>\r
    <div class="title-row">\r
      <h1>Reviewing: {{ c.consentName }}</h1>\r
      <span class="pill-id">{{ c.consentId }}</span>\r
    </div>\r
\r
    <div class="mode-card">\r
      <div class="mode-title">\u2705 CHECKER REVIEW MODE</div>\r
      <p class="mode-sub">\r
        You are reviewing a consent submitted by {{ c.createdBy?.fullName || '\u2014' }} \xB7 {{ c.submittedAt }}\r
      </p>\r
      @if (c.version > 1) {\r
        <p class="mode-note">\u21A9 This consent may have prior revisions on record (v{{ c.version }}).</p>\r
      }\r
    </div>\r
\r
    <div class="grid">\r
      <div class="field"><span class="k">Consent Name</span><span class="v">{{ c.consentName }}</span></div>\r
      <div class="field"><span class="k">Consent ID</span><span class="v mono">{{ c.consentId }}</span></div>\r
      <div class="field"><span class="k">Category</span><span class="v">{{ c.category }}</span></div>\r
      <div class="field"><span class="k">Validity Period</span><span class="v">{{ c.validityPeriodDays }} days</span></div>\r
      <div class="field"><span class="k">Status</span><span class="v">{{ c.status }}</span></div>\r
      <div class="field"><span class="k">Version</span><span class="v">{{ c.version }}</span></div>\r
      <div class="field"><span class="k">Type</span><span class="v">{{ c.type }}</span></div>\r
      <div class="field"><span class="k">Delivery Channels</span><span class="v">{{ (c.deliveryChannels || []).join(', ') }}</span></div>\r
      <div class="field full"><span class="k">Tags</span><span class="v">{{ (c.tagsUsed || []).join(', ') || '\u2014' }}</span></div>\r
      <div class="field"><span class="k">Submitted At</span><span class="v">{{ c.submittedAt }}</span></div>\r
      <div class="field"><span class="k">Created By</span><span class="v">{{ c.createdBy?.fullName }}</span></div>\r
    </div>\r
\r
    @for (d of diff(); track d.fieldName) {\r
      <div class="diff-box">\r
        <div class="diff-title">\u270F\uFE0F Modified \xB7 {{ d.fieldLabel }}</div>\r
        <div class="diff-new">{{ d.newValue }}</div>\r
        <div class="diff-old">Was: {{ d.oldValue }}</div>\r
      </div>\r
    }\r
\r
    <div class="msg-card">\r
      <div class="msg-head">\r
        <h2>Consent Message</h2>\r
        <button mat-stroked-button type="button" (click)="fullPreview()">\u{1F441} Preview in Full</button>\r
      </div>\r
      <div class="msg-body" [innerHTML]="messageHtml()"></div>\r
    </div>\r
\r
    <mat-accordion>\r
      <mat-expansion-panel>\r
        <mat-expansion-panel-header>\r
          <mat-panel-title>Version history</mat-panel-title>\r
        </mat-expansion-panel-header>\r
        @if (!versions().length) {\r
          <p class="muted">No version rows.</p>\r
        } @else {\r
          <ul class="ver-list">\r
            @for (v of versions(); track $index) {\r
              <li><pre>{{ v | json }}</pre></li>\r
            }\r
          </ul>\r
        }\r
      </mat-expansion-panel>\r
    </mat-accordion>\r
\r
    <div class="spacer"></div>\r
\r
    <div class="decision" [class.dim]="!canDecide()">\r
      <div>\r
        <div class="d-title">Make your decision for: {{ c.consentName }} v{{ c.version }}</div>\r
        <div class="d-sub">Your decision will be logged and the maker will be notified.</div>\r
      </div>\r
      <div class="d-btns">\r
        <button mat-flat-button class="ciq-btn-success ap" [disabled]="!canDecide() || busy()" (click)="approve()">\u2705 Approve</button>\r
        <button mat-stroked-button class="ciq-btn-warning rev" [disabled]="!canDecide() || busy()" (click)="requestRevision()">\r
          \u21A9 Request Revision\r
        </button>\r
        <button mat-stroked-button color="warn" [disabled]="!canDecide() || busy()" (click)="reject()">\u274C Reject</button>\r
      </div>\r
    </div>\r
  </div>\r
}\r
`, styles: ['/* src/app/features/checker/consent-review/consent-review.component.scss */\n.page {\n  max-width: 960px;\n  margin: 0 auto 120px;\n}\n.subnav a {\n  text-decoration: none;\n  color: #6366f1;\n  font-weight: 600;\n}\n.title-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin: 12px 0 16px;\n}\nh1 {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 800;\n}\n.pill-id {\n  font-size: 12px;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: #f1f5f9;\n  color: #475569;\n  font-family: "JetBrains Mono", monospace;\n}\n.mode-card {\n  border-left: 4px solid #6366f1;\n  background: #eef2ff;\n  border-radius: 10px;\n  padding: 14px 16px;\n  margin-bottom: 20px;\n}\n.mode-title {\n  font-weight: 800;\n  color: #312e81;\n}\n.mode-sub,\n.mode-note {\n  margin: 6px 0 0;\n  font-size: 14px;\n  color: #4338ca;\n}\n.grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n  margin-bottom: 16px;\n}\n@media (max-width: 700px) {\n  .grid {\n    grid-template-columns: 1fr;\n  }\n}\n.field {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 10px 12px;\n}\n.field.full {\n  grid-column: 1/-1;\n}\n.k {\n  display: block;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: #94a3b8;\n}\n.v {\n  font-size: 14px;\n  font-weight: 600;\n  color: #0f172a;\n}\n.mono {\n  font-family: "JetBrains Mono", monospace;\n}\n.diff-box {\n  border: 1px solid #fcd34d;\n  background: #fffbeb;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 10px;\n}\n.diff-title {\n  font-weight: 700;\n  color: #92400e;\n  font-size: 13px;\n}\n.diff-new {\n  margin-top: 6px;\n  font-weight: 600;\n}\n.diff-old {\n  font-size: 13px;\n  color: #64748b;\n  margin-top: 4px;\n}\n.msg-card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 16px;\n  margin: 16px 0;\n}\n.msg-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.msg-head h2 {\n  margin: 0;\n  font-size: 16px;\n}\n.msg-body {\n  background: #fafafa;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 24px;\n  min-height: 150px;\n  line-height: 1.7;\n  font-size: 15px;\n}\n.muted {\n  color: #94a3b8;\n}\n.ver-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.ver-list pre {\n  white-space: pre-wrap;\n  font-size: 12px;\n}\n.spacer {\n  height: 100px;\n}\n.decision {\n  position: fixed;\n  left: var(--sidebar-width);\n  right: 0;\n  bottom: 0;\n  z-index: 30;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  padding: 20px 32px;\n  background: #fff;\n  box-shadow: 0 -6px 20px rgba(0, 0, 0, 0.08);\n}\n@media (max-width: 900px) {\n  .decision {\n    left: 0;\n  }\n}\n.decision.dim {\n  opacity: 0.55;\n}\n.d-title {\n  font-weight: 700;\n}\n.d-sub {\n  font-size: 13px;\n  color: #64748b;\n  margin-top: 4px;\n}\n.d-btns {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.ap {\n  min-width: 140px;\n}\n.rev {\n  min-width: 180px;\n}\n/*# sourceMappingURL=consent-review.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsentReviewComponent, { className: "ConsentReviewComponent", filePath: "src/app/features/checker/consent-review/consent-review.component.ts", lineNumber: 30 });
})();
export {
  ConsentReviewComponent
};
//# sourceMappingURL=chunk-GL2KEWRE.js.map
