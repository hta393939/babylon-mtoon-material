(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["babylon-mtoon-material"] = factory();
	else
		root["babylon-mtoon-material"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/inspectable-custom-properties.ts":
/*!**********************************************!*\
  !*** ./src/inspectable-custom-properties.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInspectableCustomProperties": () => (/* binding */ getInspectableCustomProperties)
/* harmony export */ });
/* harmony import */ var _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core/Misc/iInspectable */ "./node_modules/@babylonjs/core/Misc/iInspectable.js");

/**
 * MToonMaterial に Inspector 上で調整可能なパラメータを設定する
 * @link https://doc.babylonjs.com/toolsAndResources/tools/inspector#extensibility
 */
function getInspectableCustomProperties() {
    return [
        {
            label: 'DiffuseColor',
            propertyName: 'diffuseColor',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__.InspectableType.Color3,
        },
        {
            label: 'AmbientColor',
            propertyName: 'ambientColor',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__.InspectableType.Color3,
        },
        {
            label: 'EmissiveColor',
            propertyName: 'emissiveColor',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__.InspectableType.Color3,
        },
        {
            label: 'ShadeColor',
            propertyName: 'shadeColor',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__.InspectableType.Color3,
        },
        {
            label: 'RimColor',
            propertyName: 'rimColor',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__.InspectableType.Color3,
        },
        {
            label: 'OutlineColor',
            propertyName: 'outlineColor',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__.InspectableType.Color3,
        },
        {
            label: 'ReceiveShadowRate',
            propertyName: 'receiveShadowRate',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__.InspectableType.Slider,
            min: 0,
            max: 1,
            step: 0.01,
        },
        {
            label: 'ShadingGradeRate',
            propertyName: 'shadingGradeRate',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__.InspectableType.Slider,
            min: 0,
            max: 1,
            step: 0.01,
        },
        {
            label: 'ShadeShift',
            propertyName: 'shadeShift',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__.InspectableType.Slider,
            min: -1,
            max: 1,
            step: 0.01,
        },
        {
            label: 'ShadeToony',
            propertyName: 'shadeToony',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__.InspectableType.Slider,
            min: 0,
            max: 1,
            step: 0.01,
        },
        {
            label: 'LightColorAttenuation',
            propertyName: 'lightColorAttenuation',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__.InspectableType.Slider,
            min: 0,
            max: 1,
            step: 0.01,
        },
        {
            label: 'IndirectLightIntensity',
            propertyName: 'indirectLightIntensity',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__.InspectableType.Slider,
            min: 0,
            max: 1,
            step: 0.01,
        },
        {
            label: 'RimLightingMix',
            propertyName: 'rimLightingMix',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__.InspectableType.Slider,
            min: 0,
            max: 1,
            step: 0.01,
        },
        {
            label: 'RimFresnelPower',
            propertyName: 'rimFresnelPower',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__.InspectableType.Slider,
            min: 0.01,
            max: 100,
            step: 4,
        },
        {
            label: 'RimLift',
            propertyName: 'rimLift',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__.InspectableType.Slider,
            min: 0.0,
            max: 1,
            step: 0.01,
        },
        {
            label: 'OutlineWidth',
            propertyName: 'outlineWidth',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__.InspectableType.Slider,
            min: 0.01,
            max: 1,
            step: 0.01,
        },
        {
            label: 'OutlineScaledMaxDistance',
            propertyName: 'outlineScaledMaxDistance',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__.InspectableType.Slider,
            min: 1.0,
            max: 10.0,
            step: 0.01,
        },
        {
            label: 'OutlineLightingMix',
            propertyName: 'outlineLightingMix',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__.InspectableType.Slider,
            min: 0,
            max: 1,
            step: 0.01,
        },
        {
            label: 'DebugMode',
            propertyName: 'debugMode',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__.InspectableType.Slider,
            min: 0,
            max: 2,
            step: 1,
        },
        {
            label: 'OutlineWidthMode',
            propertyName: 'outlineWidthMode',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__.InspectableType.Slider,
            min: 0,
            max: 2,
            step: 1,
        },
        {
            label: 'OutlineColorMode',
            propertyName: 'outlineColorMode',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__.InspectableType.Slider,
            min: 0,
            max: 1,
            step: 1,
        },
        {
            label: 'CullMode',
            propertyName: 'cullMode',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__.InspectableType.Slider,
            min: 0,
            max: 2,
            step: 1,
        },
        {
            label: 'OutlineCullMode',
            propertyName: 'outlineCullMode',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__.InspectableType.Slider,
            min: 0,
            max: 2,
            step: 1,
        },
        {
            label: 'AlphaCutOff',
            propertyName: 'alphaCutOff',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__.InspectableType.Slider,
            min: 0,
            max: 1,
            step: 0.01,
        },
        {
            label: 'UV Animation Scroll X',
            propertyName: 'uvAnimationScrollX',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__.InspectableType.Slider,
            min: -1,
            max: 1,
            step: 0.1,
        },
        {
            label: 'UV Animation Scroll Y',
            propertyName: 'uvAnimationScrollY',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__.InspectableType.Slider,
            min: -1,
            max: 1,
            step: 0.1,
        },
        {
            label: 'UV Animation Rotation',
            propertyName: 'uvAnimationRotation',
            type: _babylonjs_core_Misc_iInspectable__WEBPACK_IMPORTED_MODULE_0__.InspectableType.Slider,
            min: -0.5,
            max: 0.5,
            step: 0.01,
        },
    ];
}


/***/ }),

/***/ "./src/mtoon-material-defines.ts":
/*!***************************************!*\
  !*** ./src/mtoon-material-defines.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MToonMaterialDefines": () => (/* binding */ MToonMaterialDefines)
/* harmony export */ });
/* harmony import */ var _babylonjs_core_Materials_materialDefines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core/Materials/materialDefines */ "./node_modules/@babylonjs/core/Materials/materialDefines.js");
/* eslint-disable @typescript-eslint/naming-convention */

/**
 * Material Defines
 */
class MToonMaterialDefines extends _babylonjs_core_Materials_materialDefines__WEBPACK_IMPORTED_MODULE_0__.MaterialDefines {
    /**
     * @inheritdoc
     */
    constructor(externalProperties) {
        super(externalProperties);
        /** @see light-fragment.frag */
        this.CUSTOMUSERLIGHTING = true;
        // MToon Specific
        this.MTOON_OUTLINE_WIDTH_WORLD = false;
        this.MTOON_OUTLINE_WIDTH_SCREEN = false;
        this.MTOON_OUTLINE_COLOR_FIXED = false;
        this.MTOON_OUTLINE_COLOR_MIXED = false;
        this.MTOON_DEBUG_NORMAL = false;
        this.MTOON_DEBUG_LITSHADERRATE = false;
        // MToon textures
        this.SHADE = false;
        this.SHADEDIRECTUV = 0;
        this.RECEIVE_SHADOW = false;
        this.RECEIVE_SHADOWDIRECTUV = 0;
        this.SHADING_GRADE = false;
        this.SHADING_GRADEDIRECTUV = 0;
        this.RIM = false;
        this.RIMDIRECTUV = 0;
        this.MATCAP = false;
        this.MATCAPDIRECTUV = 0;
        this.OUTLINE_WIDTH = false;
        this.OUTLINE_WIDTHDIRECTUV = 0;
        this.UV_ANIMATION_MASK = false;
        this.UV_ANIMATION_MASKDIRECTUV = 0;
        // Misc
        this.MAINUV1 = false;
        this.MAINUV2 = false;
        this.MAINUV3 = false;
        this.MAINUV4 = false;
        this.MAINUV5 = false;
        this.MAINUV6 = false;
        this.DIFFUSE = false;
        this.DIFFUSEDIRECTUV = 0;
        this.BAKED_VERTEX_ANIMATION_TEXTURE = false;
        // public AMBIENT = false;
        // public AMBIENTDIRECTUV = 0;
        // public OPACITY = false;
        // public OPACITYDIRECTUV = 0;
        // public OPACITYRGB = false;
        // public REFLECTION = false;
        this.EMISSIVE = false;
        this.EMISSIVEDIRECTUV = 0;
        // public SPECULAR = false;
        // public SPECULARDIRECTUV = 0;
        this.BUMP = false;
        this.BUMPDIRECTUV = 0;
        this.PARALLAX = false;
        this.PARALLAXOCCLUSION = false;
        // public SPECULAROVERALPHA = false;
        this.CLIPPLANE = false;
        this.CLIPPLANE2 = false;
        this.CLIPPLANE3 = false;
        this.CLIPPLANE4 = false;
        this.CLIPPLANE5 = false;
        this.CLIPPLANE6 = false;
        this.ALPHATEST = false;
        this.DEPTHPREPASS = false;
        this.ALPHAFROMDIFFUSE = false;
        this.POINTSIZE = false;
        this.FOG = false;
        // public SPECULARTERM = false;
        // public DIFFUSEFRESNEL = false;
        // public OPACITYFRESNEL = false;
        // public REFLECTIONFRESNEL = false;
        // public REFRACTIONFRESNEL = false;
        // public EMISSIVEFRESNEL = false;
        // public FRESNEL = false;
        this.NORMAL = false;
        // public TANGENT = false;
        this.UV1 = false;
        this.UV2 = false;
        this.UV3 = false;
        this.UV4 = false;
        this.UV5 = false;
        this.UV6 = false;
        this.VERTEXCOLOR = false;
        this.VERTEXALPHA = false;
        this.NUM_BONE_INFLUENCERS = 0;
        this.BonesPerMesh = 0;
        this.BONETEXTURE = false;
        this.BONES_VELOCITY_ENABLED = false;
        this.INSTANCES = false;
        this.THIN_INSTANCES = false;
        // public INSTANCESCOLOR = false;
        // public GLOSSINESS = false;
        // public ROUGHNESS = false;
        // public EMISSIVEASILLUMINATION = false;
        // public LINKEMISSIVEWITHDIFFUSE = false;
        // public REFLECTIONFRESNELFROMSPECULAR = false;
        // public LIGHTMAP = false;
        // public LIGHTMAPDIRECTUV = 0;
        this.OBJECTSPACE_NORMALMAP = false;
        // public USELIGHTMAPASSHADOWMAP = false;
        // public REFLECTIONMAP_3D = false;
        // public REFLECTIONMAP_SPHERICAL = false;
        // public REFLECTIONMAP_PLANAR = false;
        // public REFLECTIONMAP_CUBIC = false;
        // public USE_LOCAL_REFLECTIONMAP_CUBIC = false;
        // public USE_LOCAL_REFRACTIONMAP_CUBIC = false;
        // public REFLECTIONMAP_PROJECTION = false;
        // public REFLECTIONMAP_SKYBOX = false;
        // public REFLECTIONMAP_EXPLICIT = false;
        // public REFLECTIONMAP_EQUIRECTANGULAR = false;
        // public REFLECTIONMAP_EQUIRECTANGULAR_FIXED = false;
        // public REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = false;
        // public REFLECTIONMAP_OPPOSITEZ = false;
        // public INVERTCUBICMAP = false;
        this.LOGARITHMICDEPTH = false;
        // public REFRACTION = false;
        // public REFRACTIONMAP_3D = false;
        // public REFLECTIONOVERALPHA = false;
        this.TWOSIDEDLIGHTING = false;
        this.SHADOWFLOAT = false;
        this.MORPHTARGETS = false;
        this.MORPHTARGETS_NORMAL = false;
        this.MORPHTARGETS_TANGENT = false;
        this.MORPHTARGETS_UV = false;
        this.NUM_MORPH_INFLUENCERS = 0;
        this.MORPHTARGETS_TEXTURE = false;
        this.NONUNIFORMSCALING = false; // https://playground.babylonjs.com#V6DWIH
        this.PREMULTIPLYALPHA = false; // https://playground.babylonjs.com#LNVJJ7
        this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = false;
        this.ALPHABLEND = true;
        this.PREPASS = false;
        this.PREPASS_IRRADIANCE = false;
        this.PREPASS_IRRADIANCE_INDEX = -1;
        this.PREPASS_ALBEDO_SQRT = false;
        this.PREPASS_ALBEDO_SQRT_INDEX = -1;
        this.PREPASS_DEPTH = false;
        this.PREPASS_DEPTH_INDEX = -1;
        this.PREPASS_NORMAL = false;
        this.PREPASS_NORMAL_INDEX = -1;
        this.PREPASS_POSITION = false;
        this.PREPASS_POSITION_INDEX = -1;
        this.PREPASS_VELOCITY = false;
        this.PREPASS_VELOCITY_INDEX = -1;
        this.PREPASS_REFLECTIVITY = false;
        this.PREPASS_REFLECTIVITY_INDEX = -1;
        this.SCENE_MRT_COUNT = 0;
        // public RGBDLIGHTMAP = false;
        // public RGBDREFLECTION = false;
        // public RGBDREFRACTION = false;
        this.IMAGEPROCESSING = false;
        this.VIGNETTE = false;
        this.VIGNETTEBLENDMODEMULTIPLY = false;
        this.VIGNETTEBLENDMODEOPAQUE = false;
        this.TONEMAPPING = false;
        this.TONEMAPPING_ACES = false;
        this.CONTRAST = false;
        this.COLORCURVES = false;
        this.COLORGRADING = false;
        this.COLORGRADING3D = false;
        this.SAMPLER3DGREENDEPTH = false;
        this.SAMPLER3DBGRMAP = false;
        this.IMAGEPROCESSINGPOSTPROCESS = false;
        this.SKIPFINALCOLORCLAMP = false;
        this.MULTIVIEW = false;
        this.ORDER_INDEPENDENT_TRANSPARENCY = false;
        this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = false;
        // /**
        //  * If the reflection texture on this material is in linear color space
        //  * @hidden
        //  */
        this.IS_REFLECTION_LINEAR = false;
        // /**
        //  * If the refraction texture on this material is in linear color space
        //  * @hidden
        //  */
        this.IS_REFRACTION_LINEAR = false;
        this.EXPOSURE = false;
        this.FLIP_U = false;
        this.FLIP_V = false;
        this.rebuild();
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setReflectionMode(modeToEnable) {
        throw new Error('This material cannot use `setReflectionMode`');
    }
}


/***/ }),

/***/ "./src/mtoon-material.ts":
/*!*******************************!*\
  !*** ./src/mtoon-material.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CullMode": () => (/* binding */ CullMode),
/* harmony export */   "DebugMode": () => (/* binding */ DebugMode),
/* harmony export */   "MToonMaterial": () => (/* binding */ MToonMaterial),
/* harmony export */   "OutlineColorMode": () => (/* binding */ OutlineColorMode),
/* harmony export */   "OutlineWidthMode": () => (/* binding */ OutlineWidthMode)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core/Misc/decorators */ "./node_modules/@babylonjs/core/Misc/decorators.js");
/* harmony import */ var _babylonjs_core_Misc_smartArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core/Misc/smartArray */ "./node_modules/@babylonjs/core/Misc/smartArray.js");
/* harmony import */ var _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babylonjs/core/scene */ "./node_modules/@babylonjs/core/scene.js");
/* harmony import */ var _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babylonjs/core/Maths/math.vector */ "./node_modules/@babylonjs/core/Maths/math.vector.js");
/* harmony import */ var _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babylonjs/core/Maths/math.color */ "./node_modules/@babylonjs/core/Maths/math.color.js");
/* harmony import */ var _babylonjs_core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babylonjs/core/Buffers/buffer */ "./node_modules/@babylonjs/core/Buffers/buffer.js");
/* harmony import */ var _babylonjs_core_Materials_imageProcessingConfiguration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babylonjs/core/Materials/imageProcessingConfiguration */ "./node_modules/@babylonjs/core/Materials/imageProcessingConfiguration.js");
/* harmony import */ var _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babylonjs/core/Materials/material */ "./node_modules/@babylonjs/core/Materials/material.js");
/* harmony import */ var _babylonjs_core_Materials_pushMaterial__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babylonjs/core/Materials/pushMaterial */ "./node_modules/@babylonjs/core/Materials/pushMaterial.js");
/* harmony import */ var _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babylonjs/core/Materials/materialHelper */ "./node_modules/@babylonjs/core/Materials/materialHelper.js");
/* harmony import */ var _babylonjs_core_Engines_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babylonjs/core/Engines/constants */ "./node_modules/@babylonjs/core/Engines/constants.js");
/* harmony import */ var _babylonjs_core_Materials_effectFallbacks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babylonjs/core/Materials/effectFallbacks */ "./node_modules/@babylonjs/core/Materials/effectFallbacks.js");
/* harmony import */ var _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babylonjs/core/Materials/effect */ "./node_modules/@babylonjs/core/Materials/effect.js");
/* harmony import */ var _babylonjs_core_Materials_material_detailMapConfiguration__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babylonjs/core/Materials/material.detailMapConfiguration */ "./node_modules/@babylonjs/core/Materials/material.detailMapConfiguration.js");
/* harmony import */ var _babylonjs_core_Materials_materialPluginEvent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babylonjs/core/Materials/materialPluginEvent */ "./node_modules/@babylonjs/core/Materials/materialPluginEvent.js");
/* harmony import */ var _inspectable_custom_properties__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./inspectable-custom-properties */ "./src/inspectable-custom-properties.ts");
/* harmony import */ var _mtoon_outline_renderer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mtoon-outline-renderer */ "./src/mtoon-outline-renderer.ts");
/* harmony import */ var _mtoon_material_defines__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mtoon-material-defines */ "./src/mtoon-material-defines.ts");
/* harmony import */ var _shaders_ubo_declaration_vert__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shaders/ubo-declaration.vert */ "./src/shaders/ubo-declaration.vert");
/* harmony import */ var _shaders_vertex_declaration_vert__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shaders/vertex-declaration.vert */ "./src/shaders/vertex-declaration.vert");
/* harmony import */ var _shaders_fragment_declaration_frag__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shaders/fragment-declaration.frag */ "./src/shaders/fragment-declaration.frag");
/* harmony import */ var _shaders_mtoon_fragment_functions_frag__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shaders/mtoon-fragment-functions.frag */ "./src/shaders/mtoon-fragment-functions.frag");
/* harmony import */ var _shaders_bump_fragment_frag__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shaders/bump-fragment.frag */ "./src/shaders/bump-fragment.frag");
/* harmony import */ var _shaders_light_fragment_frag__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shaders/light-fragment.frag */ "./src/shaders/light-fragment.frag");
/* harmony import */ var _shaders_mtoon_vert__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shaders/mtoon.vert */ "./src/shaders/mtoon.vert");
/* harmony import */ var _shaders_mtoon_frag__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shaders/mtoon.frag */ "./src/shaders/mtoon.frag");







// import { PrePassConfiguration } from "./prePassConfiguration";












const onCreatedEffectParameters = { effect: null, subMesh: null };








/**
 * Debug shading mode
 */
var DebugMode;
(function (DebugMode) {
    DebugMode[DebugMode["None"] = 0] = "None";
    DebugMode[DebugMode["Normal"] = 1] = "Normal";
    DebugMode[DebugMode["LitShadeRate"] = 2] = "LitShadeRate";
})(DebugMode || (DebugMode = {}));
/**
 * Outline color mode
 */
var OutlineColorMode;
(function (OutlineColorMode) {
    OutlineColorMode[OutlineColorMode["FixedColor"] = 0] = "FixedColor";
    OutlineColorMode[OutlineColorMode["MixedLighting"] = 1] = "MixedLighting";
})(OutlineColorMode || (OutlineColorMode = {}));
/**
 * Outline width mode
 */
var OutlineWidthMode;
(function (OutlineWidthMode) {
    OutlineWidthMode[OutlineWidthMode["None"] = 0] = "None";
    OutlineWidthMode[OutlineWidthMode["WorldCorrdinates"] = 1] = "WorldCorrdinates";
    OutlineWidthMode[OutlineWidthMode["ScreenCoordinates"] = 2] = "ScreenCoordinates";
})(OutlineWidthMode || (OutlineWidthMode = {}));
/**
 * Cull mode
 */
var CullMode;
(function (CullMode) {
    CullMode[CullMode["Off"] = 0] = "Off";
    CullMode[CullMode["Front"] = 1] = "Front";
    CullMode[CullMode["Back"] = 2] = "Back";
})(CullMode || (CullMode = {}));
/**
 * MToon は日本のアニメ的表現をすることを目標としています。
 * 主色 (Lit Color) と陰色 (Shade Color) の 2 色を、Lighting パラメータや光源環境に応じて混合することでそれを実現します。
 * VRM での出力パラメータとプロパティのマッピングは下記となります。
 *
 * MToon aims for making Japanese anime expressions.
 * It is achieved by mixing Lit Color and Shade Color based on Lighting parameters and light source environment.
 *
 * @see https://github.com/Santarh/MToon/
 * @see https://vrm.dev/univrm/shaders/mtoon/
 * @see https://doc.babylonjs.com/babylon101/materials
 */
class MToonMaterial extends _babylonjs_core_Materials_pushMaterial__WEBPACK_IMPORTED_MODULE_8__.PushMaterial {
    //#endregion
    /**
     * {@inheritdoc}
     */
    constructor(name, scene) {
        super(name, scene);
        //#region Properties
        //#region Textures
        this._diffuseTexture = null;
        /**
         * The basic texture of the material as viewed under a light.
         */
        this.diffuseTexture = null;
        this._emissiveTexture = null;
        /**
         * Define texture of the material as if self lit.
         * This will be mixed in the final result even in the absence of light.
         */
        this.emissiveTexture = null;
        this._bumpTexture = null;
        /**
         * Bump mapping is a technique to simulate bump and dents on a rendered surface.
         * These are made by creating a normal map from an image. The means to do this can be found on the web, a search for 'normal map generator' will bring up free and paid for methods of doing this.
         * @see https://doc.babylonjs.com/how_to/more_materials#bump-map
         */
        this.bumpTexture = null;
        this._shadeTexture = null;
        /**
         * The basic texture of the material as viewed does not receive a light
         */
        this.shadeTexture = null;
        this._receiveShadowTexture = null;
        /**
         * Receiving shadow rate with texture
         * receiveShadowRate * texture.a
         */
        this.receiveShadowTexture = null;
        this._shadingGradeTexture = null;
        /**
         * Shading grade rate
         * shadingGradeRate * (1.0 - texture.r))
         */
        this.shadingGradeTexture = null;
        this._rimTexture = null;
        /**
         * Parametric Rim Lighting
         */
        this.rimTexture = null;
        this._matCapTexture = null;
        /**
         * MatCap Lighting
         */
        this.matCapTexture = null;
        this._outlineWidthTexture = null;
        /**
         * Adjust outline width
         */
        this.outlineWidthTexture = null;
        this._uvAnimationMaskTexture = null;
        /**
         * UV animation mask
         */
        this.uvAnimationMaskTexture = null;
        //#endregion
        //#region Colors
        /**
         * Multiplier of diffuseTexture
         */
        this.diffuseColor = new _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_4__.Color3(1.0, 1.0, 1.0);
        /**
         * babylon.js Ambient light
         */
        this.ambientColor = new _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_4__.Color3(0.0, 0.0, 0.0);
        /**
         * Emissive color
         */
        this.emissiveColor = new _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_4__.Color3(0.0, 0.0, 0.0);
        /**
         * Multiplier of shadeTexture
         */
        this.shadeColor = new _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_4__.Color3(0.97, 0.81, 0.86);
        /**
         * Rim color
         */
        this.rimColor = new _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_4__.Color3(0.0, 0.0, 0.0);
        /**
         * Outline color
         */
        this.outlineColor = new _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_4__.Color3(0.0, 0.0, 0.0);
        //#endregion
        //#region StandardMaterial parameters
        /**
         * If true, the emissive value is added into the end result, otherwise it is multiplied in.
         */
        this.useEmissiveAsIllumination = false;
        /**
         * If true, some kind of energy conservation will prevent the end result to be more than 1 by reducing
         * the emissive level when the final color is close to one.
         */
        this.linkEmissiveWithDiffuse = false;
        /**
         * Specifies that the material will keeps the reflection highlights over a transparent surface (only the most luminous ones).
         * A car glass is a good exemple of that. When the street lights reflects on it you can not see what is behind.
         */
        this.useReflectionOverAlpha = false;
        this._disableLighting = false;
        /**
         * Allows using an object space normal map (instead of tangent space).
         * No support
         */
        this.useObjectSpaceNormalMap = false;
        /**
         * Is parallax enabled or not.
         * @see https://doc.babylonjs.com/how_to/using_parallax_mapping
         * No support
         */
        this.useParallax = false;
        /**
         * Is parallax occlusion enabled or not.
         * If true, the outcome is way more realistic than traditional Parallax but you can expect a performance hit that worthes consideration.
         * @see https://doc.babylonjs.com/how_to/using_parallax_mapping
         * No support
         */
        this.useParallaxOcclusion = false;
        /**
         * No support for specular
         */
        this.specularSupported = false;
        /**
         * In case of light mapping, define whether the map contains light or shadow informations.
         * No support
         */
        this.useLightmapAsShadowmap = false;
        /**
         * No support for vertex colors
         */
        this.useVertexColor = false;
        /**
         * Support for bones in shader
         */
        this.useBones = true;
        /**
         * Support for morph targets in shader
         */
        this.useMorphTargets = true;
        /**
         * No support for vertex alpha
         */
        this.useVertexAlpha = false;
        /**
         * No support for baked vertex animation
         */
        this.useBakedVertexAnimation = false;
        /**
         * Defines the alpha limits in alpha test mode.
         */
        this.alphaCutOff = 0.4;
        this._useAlphaFromDiffuseTexture = true;
        this._maxSimultaneousLights = 4;
        /**
         * inverted state equals with Unity
         */
        this._invertNormalMapX = true;
        /**
         * inverted state equals with Unity
         */
        this._invertNormalMapY = true;
        this._twoSidedLighting = false;
        this._renderTargets = new _babylonjs_core_Misc_smartArray__WEBPACK_IMPORTED_MODULE_1__.SmartArray(16);
        this._worldViewProjectionMatrix = _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Matrix.Zero();
        this._globalAmbientColor = new _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_4__.Color3(0, 0, 0);
        this._cacheHasRenderTargetTextures = false;
        //#endregion
        //#region MToon parameters
        this._bumpScale = 1.0;
        this._receiveShadowRate = 1.0;
        this._shadingGradeRate = 1.0;
        this._shadeShift = 0.0;
        this._shadeToony = 0.9;
        this._lightColorAttenuation = 0.0;
        this._indirectLightIntensity = 0.1;
        this._rimLightingMix = 0;
        this._rimFresnelPower = 1;
        this._rimLift = 0;
        this._outlineWidth = 0.5;
        this._outlineScaledMaxDistance = 1.0;
        this._outlineLightingMix = 1.0;
        this._uvAnimationScrollX = 0.0;
        this._uvAnimationScrollY = 0.0;
        this._uvAnimationRotation = 0.0;
        this._alphaTest = false;
        this._alphaBlend = false;
        this._debugMode = DebugMode.None;
        /** @hidden */
        this.debugMode = DebugMode.None;
        this._outlineWidthMode = OutlineWidthMode.None;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.isOutline = 0.0;
        this.outlineColorMode = OutlineColorMode.MixedLighting;
        this._cullMode = CullMode.Back;
        this._outlineCullMode = CullMode.Front;
        this.outlineCullMode = CullMode.Front;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.storedCullMode = CullMode.Back;
        //#endregion
        /**
         * flip mainUv.x if true
         */
        this.flipU = false;
        /**
         * flip mainUv.y if true
         */
        this.flipV = false;
        this.detailMap = new _babylonjs_core_Materials_material_detailMapConfiguration__WEBPACK_IMPORTED_MODULE_13__.DetailMapConfiguration(this);
        // Setup the default processing configuration to the scene.
        this._attachImageProcessingConfiguration(null);
        // this.prePassConfiguration = new PrePassConfiguration();
        this.getRenderTargetTextures = () => {
            this._renderTargets.reset();
            // if (StandardMaterial.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) {
            //     this._renderTargets.push(<RenderTargetTexture>this._reflectionTexture);
            // }
            // if (StandardMaterial.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) {
            //     this._renderTargets.push(<RenderTargetTexture>this._refractionTexture);
            // }
            this._eventInfo.renderTargets = this._renderTargets;
            this._callbackPluginEventFillRenderTargetTextures(this._eventInfo);
            return this._renderTargets;
        };
        // Register shaders to ShadersStore
        if (!_babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_12__.Effect.IncludesShadersStore.mtoonUboDeclaration) {
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_12__.Effect.IncludesShadersStore.mtoonUboDeclaration = _shaders_ubo_declaration_vert__WEBPACK_IMPORTED_MODULE_18__;
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_12__.Effect.IncludesShadersStore.mtoonVertexDeclaration = _shaders_vertex_declaration_vert__WEBPACK_IMPORTED_MODULE_19__;
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_12__.Effect.IncludesShadersStore.mtoonFragmentDeclaration = _shaders_fragment_declaration_frag__WEBPACK_IMPORTED_MODULE_20__;
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_12__.Effect.IncludesShadersStore.mtoonFragmentFunctions = _shaders_mtoon_fragment_functions_frag__WEBPACK_IMPORTED_MODULE_21__;
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_12__.Effect.IncludesShadersStore.mtoonLightFragment = _shaders_light_fragment_frag__WEBPACK_IMPORTED_MODULE_23__;
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_12__.Effect.IncludesShadersStore.mtoonBumpFragment = _shaders_bump_fragment_frag__WEBPACK_IMPORTED_MODULE_22__;
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_12__.Effect.ShadersStore.mtoonVertexShader = _shaders_mtoon_vert__WEBPACK_IMPORTED_MODULE_24__;
            _babylonjs_core_Materials_effect__WEBPACK_IMPORTED_MODULE_12__.Effect.ShadersStore.mtoonFragmentShader = _shaders_mtoon_frag__WEBPACK_IMPORTED_MODULE_25__;
        }
        // Add properties to Inspactor
        this.inspectableCustomProperties = this.inspectableCustomProperties || [];
        this.inspectableCustomProperties.push(...(0,_inspectable_custom_properties__WEBPACK_IMPORTED_MODULE_15__.getInspectableCustomProperties)());
    }
    /**
     * the list of textures
     *
     * @returns {Array<Nullable<BaseTexture>>}
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    get appendedTextures() {
        return [
            this._diffuseTexture,
            this._emissiveTexture,
            this._bumpTexture,
            this._shadeTexture,
            this._receiveShadowTexture,
            this._shadingGradeTexture,
            this._rimTexture,
            this._matCapTexture,
            this._outlineWidthTexture,
            this._uvAnimationMaskTexture,
        ];
    }
    /**
     * the list of active textures
     *
     * @returns {BaseTexture[]}
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    get appendedActiveTextures() {
        return this.appendedTextures.filter((t) => t !== null);
    }
    /**
     * Gets the image processing configuration used either in this material.
     */
    get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration;
    }
    /**
     * Sets the Default image processing configuration used either in the this material.
     *
     * If sets to null, the scene one is in use.
     */
    set imageProcessingConfiguration(value) {
        this._attachImageProcessingConfiguration(value);
        // Ensure the effect will be rebuilt.
        this._markAllSubMeshesAsTexturesDirty();
    }
    /**
     * Attaches a new image processing configuration to the Standard Material.
     * @param configuration
     */
    _attachImageProcessingConfiguration(configuration) {
        if (configuration === this._imageProcessingConfiguration) {
            return;
        }
        // Detaches observer
        if (this._imageProcessingConfiguration && this._imageProcessingObserver) {
            this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver);
        }
        // Pick the scene configuration if needed
        if (!configuration) {
            this._imageProcessingConfiguration = this.getScene().imageProcessingConfiguration;
        }
        else {
            this._imageProcessingConfiguration = configuration;
        }
        // Attaches observer
        if (this._imageProcessingConfiguration) {
            this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add(() => {
                this._markAllSubMeshesAsImageProcessingDirty();
            });
        }
    }
    // /**
    //  * Defines additional PrePass parameters for the material.
    //  */
    // public readonly prePassConfiguration: PrePassConfiguration;
    /**
     * Can this material render to prepass
     * No support for PrePass
     */
    get isPrePassCapable() {
        // return !this.disableDepthWrite;
        return false;
    }
    /**
     * Gets whether the color curves effect is enabled.
     */
    get cameraColorCurvesEnabled() {
        return this.imageProcessingConfiguration.colorCurvesEnabled;
    }
    /**
     * Sets whether the color curves effect is enabled.
     */
    set cameraColorCurvesEnabled(value) {
        this.imageProcessingConfiguration.colorCurvesEnabled = value;
    }
    /**
     * Gets whether the color grading effect is enabled.
     */
    get cameraColorGradingEnabled() {
        return this.imageProcessingConfiguration.colorGradingEnabled;
    }
    /**
     * Gets whether the color grading effect is enabled.
     */
    set cameraColorGradingEnabled(value) {
        this.imageProcessingConfiguration.colorGradingEnabled = value;
    }
    /**
     * Gets whether tonemapping is enabled or not.
     */
    get cameraToneMappingEnabled() {
        return this._imageProcessingConfiguration.toneMappingEnabled;
    }
    /**
     * Sets whether tonemapping is enabled or not
     */
    set cameraToneMappingEnabled(value) {
        this._imageProcessingConfiguration.toneMappingEnabled = value;
    }
    /**
     * The camera exposure used on this material.
     * This property is here and not in the camera to allow controlling exposure without full screen post process.
     * This corresponds to a photographic exposure.
     */
    get cameraExposure() {
        return this._imageProcessingConfiguration.exposure;
    }
    /**
     * The camera exposure used on this material.
     * This property is here and not in the camera to allow controlling exposure without full screen post process.
     * This corresponds to a photographic exposure.
     */
    set cameraExposure(value) {
        this._imageProcessingConfiguration.exposure = value;
    }
    /**
     * Gets The camera contrast used on this material.
     */
    get cameraContrast() {
        return this._imageProcessingConfiguration.contrast;
    }
    /**
     * Sets The camera contrast used on this material.
     */
    set cameraContrast(value) {
        this._imageProcessingConfiguration.contrast = value;
    }
    /**
     * Gets the Color Grading 2D Lookup Texture.
     */
    get cameraColorGradingTexture() {
        return this._imageProcessingConfiguration.colorGradingTexture;
    }
    /**
     * Sets the Color Grading 2D Lookup Texture.
     */
    set cameraColorGradingTexture(value) {
        this._imageProcessingConfiguration.colorGradingTexture = value;
    }
    /**
     * The color grading curves provide additional color adjustmnent that is applied after any color grading transform (3D LUT).
     * They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.
     * These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;
     * corresponding to low luminance, medium luminance, and high luminance areas respectively.
     */
    get cameraColorCurves() {
        return this._imageProcessingConfiguration.colorCurves;
    }
    /**
     * The color grading curves provide additional color adjustment that is applied after any color grading transform (3D LUT).
     * They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.
     * These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;
     * corresponding to low luminance, medium luminance, and high luminance areas respectively.
     */
    set cameraColorCurves(value) {
        this._imageProcessingConfiguration.colorCurves = value;
    }
    /**
     * Can this material render to several textures at once
     */
    get canRenderToMRT() {
        return true;
    }
    get bumpScale() {
        return this._bumpScale;
    }
    set bumpScale(value) {
        this._bumpScale = value;
    }
    get receiveShadowRate() {
        return this._receiveShadowRate;
    }
    set receiveShadowRate(value) {
        this._receiveShadowRate = Math.max(0.0, Math.min(1.0, value));
        this._markAllSubMeshesAsLightsDirty();
    }
    get shadingGradeRate() {
        return this._shadingGradeRate;
    }
    set shadingGradeRate(value) {
        this._shadingGradeRate = Math.max(0.0, Math.min(1.0, value));
        this._markAllSubMeshesAsLightsDirty();
    }
    get shadeShift() {
        return this._shadeShift;
    }
    set shadeShift(value) {
        this._shadeShift = Math.max(-1.0, Math.min(1.0, value));
        this._markAllSubMeshesAsLightsDirty();
    }
    get shadeToony() {
        return this._shadeToony;
    }
    set shadeToony(value) {
        this._shadeToony = Math.max(0.0, Math.min(1.0, value));
        this._markAllSubMeshesAsLightsDirty();
    }
    get lightColorAttenuation() {
        return this._lightColorAttenuation;
    }
    set lightColorAttenuation(value) {
        this._lightColorAttenuation = Math.max(0.0, Math.min(1.0, value));
        this._markAllSubMeshesAsLightsDirty();
    }
    get indirectLightIntensity() {
        return this._indirectLightIntensity;
    }
    set indirectLightIntensity(value) {
        this._indirectLightIntensity = Math.max(0.0, Math.min(1.0, value));
        this._markAllSubMeshesAsLightsDirty();
    }
    get rimLightingMix() {
        return this._rimLightingMix;
    }
    set rimLightingMix(value) {
        this._rimLightingMix = Math.max(0.0, Math.min(1.0, value));
        this._markAllSubMeshesAsLightsDirty();
    }
    get rimFresnelPower() {
        return this._rimFresnelPower;
    }
    set rimFresnelPower(value) {
        this._rimFresnelPower = Math.max(0.0, Math.min(100.0, value));
        this._markAllSubMeshesAsLightsDirty();
    }
    get rimLift() {
        return this._rimLift;
    }
    set rimLift(value) {
        this._rimLift = Math.max(0.0, Math.min(1.0, value));
        this._markAllSubMeshesAsLightsDirty();
    }
    get outlineWidth() {
        return this._outlineWidth;
    }
    set outlineWidth(value) {
        this._outlineWidth = Math.max(0.01, Math.min(1.0, value));
        this._markAllSubMeshesAsAttributesDirty();
    }
    get outlineScaledMaxDistance() {
        return this._outlineScaledMaxDistance;
    }
    set outlineScaledMaxDistance(value) {
        this._outlineScaledMaxDistance = Math.max(1.0, Math.min(10.0, value));
        this._markAllSubMeshesAsAttributesDirty();
    }
    get outlineLightingMix() {
        return this._outlineLightingMix;
    }
    set outlineLightingMix(value) {
        this._outlineLightingMix = Math.max(0.0, Math.min(1.0, value));
        this._markAllSubMeshesAsAttributesDirty();
    }
    get uvAnimationScrollX() {
        return this._uvAnimationScrollX;
    }
    set uvAnimationScrollX(value) {
        this._uvAnimationScrollX = value;
        this._markAllSubMeshesAsMiscDirty();
    }
    get uvAnimationScrollY() {
        return this._uvAnimationScrollY;
    }
    set uvAnimationScrollY(value) {
        this._uvAnimationScrollY = value;
        this._markAllSubMeshesAsMiscDirty();
    }
    get uvAnimationRotation() {
        return this._uvAnimationRotation;
    }
    set uvAnimationRotation(value) {
        this._uvAnimationRotation = value;
        this._markAllSubMeshesAsMiscDirty();
    }
    get alphaTest() {
        return this._alphaTest;
    }
    set alphaTest(value) {
        this._alphaTest = value;
        if (value) {
            if (this.alphaBlend) {
                this._transparencyMode = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_7__.Material.MATERIAL_ALPHATESTANDBLEND;
            }
            else {
                this._transparencyMode = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_7__.Material.MATERIAL_ALPHATEST;
            }
        }
        else {
            this._transparencyMode = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_7__.Material.MATERIAL_OPAQUE;
        }
        this._markAllSubMeshesAsMiscDirty();
    }
    get alphaBlend() {
        return this._alphaBlend;
    }
    set alphaBlend(value) {
        this._alphaBlend = value;
        if (value) {
            this.backFaceCulling = true;
            if (this.alphaTest) {
                this._transparencyMode = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_7__.Material.MATERIAL_ALPHATESTANDBLEND;
            }
            else {
                this._transparencyMode = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_7__.Material.MATERIAL_ALPHABLEND;
            }
        }
        else {
            this._transparencyMode = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_7__.Material.MATERIAL_OPAQUE;
        }
        this._markAllSubMeshesAsMiscDirty();
    }
    get outlineWidthMode() {
        return this._outlineWidthMode;
    }
    set outlineWidthMode(value) {
        this._outlineWidthMode = value;
        if (value !== OutlineWidthMode.None && !this.outlineRenderer) {
            /**
             * このマテリアル用のアウトラインレンダラーを生成する
             */
            this.outlineRenderer = new _mtoon_outline_renderer__WEBPACK_IMPORTED_MODULE_16__.MToonOutlineRenderer(this.getScene(), this);
        }
        this._markAllSubMeshesAsMiscDirty();
    }
    enableOutlineRender() {
        this.isOutline = 1.0;
    }
    disaableOutlineRender() {
        this.isOutline = 0.0;
    }
    get cullMode() {
        return this._cullMode;
    }
    set cullMode(value) {
        this._cullMode = value;
        switch (this._cullMode) {
            case CullMode.Off:
                // 両面を描画する
                this.backFaceCulling = false;
                this.sideOrientation = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_7__.Material.ClockWiseSideOrientation;
                this.twoSidedLighting = false;
                break;
            case CullMode.Front:
                // 表面を描画しない(=裏面だけ描画する)
                this.backFaceCulling = true;
                this.sideOrientation = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_7__.Material.CounterClockWiseSideOrientation;
                this.twoSidedLighting = true;
                break;
            case CullMode.Back:
                // 裏面を描画しない(=表面だけ描画する) デフォルト
                this.backFaceCulling = true;
                this.sideOrientation = _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_7__.Material.ClockWiseSideOrientation;
                this.twoSidedLighting = false;
                break;
        }
        this._markAllSubMeshesAsMiscDirty();
    }
    /**
     * アウトライン用 CullMode を設定
     * @hidden
     */
    applyOutlineCullMode() {
        this.storedCullMode = this.cullMode;
        this.cullMode = this._outlineCullMode;
    }
    /**
     * CullMode をリストア
     * @hidden
     */
    restoreOutlineCullMode() {
        this.cullMode = this.storedCullMode;
    }
    /**
     * @hidden
     */
    getOutlineRendererName() {
        if (!this.outlineRenderer) {
            return '';
        }
        return this.outlineRenderer.name;
    }
    /**
     * Gets a boolean indicating that current material needs to register RTT
     */
    get hasRenderTargetTextures() {
        // if (StandardMaterial.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) {
        //     return true;
        // }
        // if (StandardMaterial.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) {
        //     return true;
        // }
        return false;
    }
    /**
     * {@inheritdoc}
     */
    getClassName() {
        return 'MToonMaterial';
    }
    /**
     * In case the depth buffer does not allow enough depth precision for your scene (might be the case in large scenes)
     * You can try switching to logarithmic depth.
     * @see https://doc.babylonjs.com/how_to/using_logarithmic_depth_buffer
     */
    get useLogarithmicDepth() {
        return this._useLogarithmicDepth;
    }
    set useLogarithmicDepth(value) {
        const newValue = value && this.getScene().getEngine().getCaps().fragmentDepthSupported;
        if (this._useLogarithmicDepth !== newValue) {
            this._useLogarithmicDepth = newValue;
            this._markAllSubMeshesAsMiscDirty();
        }
    }
    /**
     * {@inheritdoc}
     */
    needAlphaBlending() {
        if (this._disableAlphaBlending) {
            return false;
        }
        // return (this.alpha < 1.0) || (this._opacityTexture != null) || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled;
        return this.alpha < 1.0 || this._shouldUseAlphaFromDiffuseTexture();
    }
    /**
     * {@inheritdoc}
     */
    needAlphaTesting() {
        if (this._forceAlphaTest) {
            return true;
        }
        if (this._alphaTest) {
            return true;
        }
        return this._hasAlphaChannel() && (this._transparencyMode == null || this._transparencyMode === _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_7__.Material.MATERIAL_ALPHATEST);
    }
    /**
     * {@inheritdoc}
     */
    _shouldUseAlphaFromDiffuseTexture() {
        return this._diffuseTexture != null && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== _babylonjs_core_Materials_material__WEBPACK_IMPORTED_MODULE_7__.Material.MATERIAL_OPAQUE;
    }
    /**
     * {@inheritdoc}
     */
    _hasAlphaChannel() {
        return this._diffuseTexture !== null && this._diffuseTexture.hasAlpha; // || this._opacityTexture != null;
    }
    /**
     * {@inheritdoc}
     */
    getAlphaTestTexture() {
        return this._diffuseTexture;
    }
    /**
     * {@inheritdoc}
     */
    isReadyForSubMesh(mesh, subMesh, useInstances = false) {
        if (!this._uniformBufferLayoutBuilt) {
            this.buildUniformLayout();
        }
        if (subMesh.effect && this.isFrozen) {
            if (subMesh.effect._wasPreviouslyReady && subMesh.effect._wasPreviouslyUsingInstances === useInstances) {
                return true;
            }
        }
        if (!subMesh.materialDefines) {
            this._callbackPluginEventGeneric(_babylonjs_core_Materials_materialPluginEvent__WEBPACK_IMPORTED_MODULE_14__.MaterialPluginEvent.GetDefineNames, this._eventInfo);
            subMesh.materialDefines = new _mtoon_material_defines__WEBPACK_IMPORTED_MODULE_17__.MToonMaterialDefines();
        }
        const scene = this.getScene();
        const defines = subMesh.materialDefines;
        if (this._isReadyForSubMesh(subMesh)) {
            return true;
        }
        const engine = scene.getEngine();
        // Lights
        defines._needNormals = _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_9__.MaterialHelper.PrepareDefinesForLights(scene, mesh, defines, this.specularSupported, this._maxSimultaneousLights, this._disableLighting);
        if (this.outlineWidthMode !== OutlineWidthMode.None) {
            // Normals is needed when rendering outline
            defines._needNormals = true;
        }
        this.applyDefines(defines);
        // Multiview
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_9__.MaterialHelper.PrepareDefinesForMultiview(scene, defines);
        // PrePass
        const oit = this.needAlphaBlendingForMesh(mesh) && scene.useOrderIndependentTransparency;
        // MaterialHelper.PrepareDefinesForPrePass(scene, defines, this.canRenderToMRT && !oit);
        // Order independant transparency
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_9__.MaterialHelper.PrepareDefinesForOIT(scene, defines, oit);
        // Textures
        if (defines._areTexturesDirty) {
            this._eventInfo.hasRenderTargetTextures = false;
            this._callbackPluginEventHasRenderTargetTextures(this._eventInfo);
            this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures;
            defines._needUVs = false;
            for (let i = 1; i <= _babylonjs_core_Engines_constants__WEBPACK_IMPORTED_MODULE_10__.Constants.MAX_SUPPORTED_UV_SETS; ++i) {
                defines['MAINUV' + i] = false;
            }
            if (scene.texturesEnabled) {
                // Check texture is ready
                if (!this.isReadyForTexture(this._diffuseTexture, defines, 'DIFFUSE') ||
                    !this.isReadyForTexture(this._emissiveTexture, defines, 'EMISSIVE') ||
                    !this.isReadyForTexture(this._shadeTexture, defines, 'SHADE') ||
                    !this.isReadyForTexture(this._receiveShadowTexture, defines, 'RECEIVE_SHADOW') ||
                    !this.isReadyForTexture(this._shadingGradeTexture, defines, 'SHADING_GRADE') ||
                    !this.isReadyForTexture(this._rimTexture, defines, 'RIM') ||
                    !this.isReadyForTexture(this._matCapTexture, defines, 'MATCAP') ||
                    !this.isReadyForTexture(this._outlineWidthTexture, defines, 'OUTLINE_WIDTH') ||
                    !this.isReadyForTexture(this._uvAnimationMaskTexture, defines, 'UV_ANIMATION_MASK')) {
                    return false;
                }
                if (scene.getEngine().getCaps().standardDerivatives && this._bumpTexture) {
                    // Bump texure can not be not blocking.
                    if (!this._bumpTexture.isReady()) {
                        return false;
                    }
                    _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_9__.MaterialHelper.PrepareDefinesForMergedUV(this._bumpTexture, defines, 'BUMP');
                    defines.PARALLAX = this.useParallax;
                    defines.PARALLAXOCCLUSION = this.useParallaxOcclusion;
                    defines.OBJECTSPACE_NORMALMAP = this.useObjectSpaceNormalMap;
                }
                else {
                    defines.BUMP = false;
                    defines.PARALLAX = false;
                    defines.PARALLAXOCCLUSION = false;
                }
                defines.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting;
            }
            else {
                defines.DIFFUSE = false;
                defines.EMISSIVE = false;
                defines.SHADE = false;
                defines.RECEIVE_SHADOW = false;
                defines.SHADING_GRADE = false;
                defines.RIM = false;
                defines.MATCAP = false;
                defines.OUTLINE_WIDTH = false;
                defines.BUMP = false;
                defines.UV_ANIMATION_MASK = false;
            }
            defines.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture();
            // defines.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination;
            // defines.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse;
            // defines.SPECULAROVERALPHA = this._useSpecularOverAlpha;
            defines.PREMULTIPLYALPHA = this.alphaMode === _babylonjs_core_Engines_constants__WEBPACK_IMPORTED_MODULE_10__.Constants.ALPHA_PREMULTIPLIED || this.alphaMode === _babylonjs_core_Engines_constants__WEBPACK_IMPORTED_MODULE_10__.Constants.ALPHA_PREMULTIPLIED_PORTERDUFF;
            defines.ALPHATEST_AFTERALLALPHACOMPUTATIONS = this.transparencyMode !== null;
            defines.ALPHABLEND = this.transparencyMode === null || this.needAlphaBlendingForMesh(mesh); // check on null for backward compatibility
        }
        this._eventInfo.isReadyForSubMesh = true;
        this._eventInfo.defines = defines;
        this._callbackPluginEventIsReadyForSubMesh(this._eventInfo);
        if (!this._eventInfo.isReadyForSubMesh) {
            return false;
        }
        if (defines._areImageProcessingDirty && this._imageProcessingConfiguration) {
            if (!this._imageProcessingConfiguration.isReady()) {
                return false;
            }
            this._imageProcessingConfiguration.prepareDefines(defines);
            // defines.IS_REFLECTION_LINEAR = (this.reflectionTexture != null && !this.reflectionTexture.gammaSpace);
            // defines.IS_REFRACTION_LINEAR = (this.refractionTexture != null && !this.refractionTexture.gammaSpace);
        }
        if (this.flipU !== defines.FLIP_U) {
            defines.FLIP_U = this.flipU;
            defines.markAsUnprocessed();
        }
        if (this.flipV !== defines.FLIP_V) {
            defines.FLIP_V = this.flipV;
            defines.markAsUnprocessed();
        }
        // Misc.
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_9__.MaterialHelper.PrepareDefinesForMisc(mesh, scene, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this._shouldTurnAlphaTestOn(mesh) || this._forceAlphaTest, defines);
        // Values that need to be evaluated on every frame
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_9__.MaterialHelper.PrepareDefinesForFrameBoundValues(scene, engine, defines, useInstances, null, subMesh.getRenderingMesh().hasThinInstances);
        // External config
        this._eventInfo.defines = defines;
        this._eventInfo.mesh = mesh;
        this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo);
        // Attribs
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_9__.MaterialHelper.PrepareDefinesForAttributes(mesh, defines, this.useVertexColor, this.useBones, this.useMorphTargets, this.useVertexAlpha, this.useBakedVertexAnimation);
        // External config
        this._callbackPluginEventPrepareDefines(this._eventInfo);
        // Get correct effect
        if (defines.isDirty) {
            const lightDisposed = defines._areLightsDisposed;
            defines.markAsProcessed();
            // Fallbacks
            const fallbacks = new _babylonjs_core_Materials_effectFallbacks__WEBPACK_IMPORTED_MODULE_11__.EffectFallbacks();
            if (defines.BUMP) {
                fallbacks.addFallback(0, 'BUMP');
            }
            if (defines.PARALLAX) {
                fallbacks.addFallback(1, 'PARALLAX');
            }
            if (defines.PARALLAXOCCLUSION) {
                fallbacks.addFallback(0, 'PARALLAXOCCLUSION');
            }
            if (defines.FOG) {
                fallbacks.addFallback(1, 'FOG');
            }
            if (defines.POINTSIZE) {
                fallbacks.addFallback(0, 'POINTSIZE');
            }
            if (defines.LOGARITHMICDEPTH) {
                fallbacks.addFallback(0, 'LOGARITHMICDEPTH');
            }
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_9__.MaterialHelper.HandleFallbacksForShadows(defines, fallbacks, this._maxSimultaneousLights);
            if (defines.MULTIVIEW) {
                fallbacks.addFallback(0, 'MULTIVIEW');
            }
            // Attributes
            const attribs = [_babylonjs_core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_5__.VertexBuffer.PositionKind];
            if (defines.NORMAL) {
                attribs.push(_babylonjs_core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_5__.VertexBuffer.NormalKind);
            }
            if (defines.TANGENT) {
                attribs.push(_babylonjs_core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_5__.VertexBuffer.TangentKind);
            }
            for (let i = 1; i <= _babylonjs_core_Engines_constants__WEBPACK_IMPORTED_MODULE_10__.Constants.MAX_SUPPORTED_UV_SETS; ++i) {
                if (defines['UV' + i]) {
                    attribs.push(`uv${i === 1 ? '' : i}`);
                }
            }
            if (defines.INSTANCESCOLOR) {
                attribs.push(_babylonjs_core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_5__.VertexBuffer.ColorInstanceKind);
            }
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_9__.MaterialHelper.PrepareAttributesForBones(attribs, mesh, defines, fallbacks);
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_9__.MaterialHelper.PrepareAttributesForInstances(attribs, defines);
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_9__.MaterialHelper.PrepareAttributesForMorphTargets(attribs, mesh, defines);
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_9__.MaterialHelper.PrepareAttributesForBakedVertexAnimation(attribs, mesh, defines);
            const shaderName = 'mtoon';
            const uniforms = [
                // StandardMaterial uniforms
                'world',
                'view',
                'viewProjection',
                'vEyePosition',
                'vLightsType',
                'vAmbientColor',
                'visibility',
                'vFogInfos',
                'vFogColor',
                'pointSize',
                'mBones',
                'vClipPlane',
                'vClipPlane2',
                'vClipPlane3',
                'vClipPlane4',
                'vClipPlane5',
                'vClipPlane6',
                // "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor",
                // "vReflectionPosition", "vReflectionSize", "vRefractionPosition", "vRefractionSize",
                'logarithmicDepthConstant',
                'vTangentSpaceParams',
                'alphaCutOff',
                'boneTextureWidth',
                'morphTargetTextureInfo',
                'morphTargetTextureIndices',
                // Texture uniforms
                'vDiffuseColor',
                'vDiffuseInfos',
                'diffuseMatrix',
                'vEmissiveColor',
                'vEmissiveInfos',
                'emissiveMatrix',
                'vBumpInfos',
                'bumpMatrix',
                'vShadeColor',
                'vShadeInfos',
                'shadeMatrix',
                'vReceiveShadowInfos',
                'receiveShadowMatrix',
                'vShadingGradeInfos',
                'shadingGradeMatrix',
                'vRimColor',
                'vRimInfos',
                'RimMatrix',
                'vMatCapInfos',
                'MatCapMatrix',
                'vOutlineColor',
                'vOutlineWidthInfos',
                'outlineWidthMatrix',
                // MToon uniforms
                'aspect',
                'isOutline',
                'shadingGradeRate',
                'receiveShadowRate',
                'shadeShift',
                'shadeToony',
                'rimLightingMix',
                'rimFresnelPower',
                'rimLift',
                'lightColorAttenuation',
                'indirectLightIntensity',
                'outlineWidth',
                'outlineScaledMaxDistance',
                'outlineLightingMix',
                'uvAnimationScrollX',
                'uvAnimationScrollY',
                'uvAnimationRotation',
                'vEyeUp',
                'time',
                // Material#bindViewProjection
                'projection',
            ];
            const samplers = [
                // StandardMaterial samplers
                'diffuseSampler',
                'ambientSampler',
                'emissiveSampler',
                'bumpSampler',
                'boneSampler',
                'morphTargets',
                'oitDepthSampler',
                'oitFrontColorSampler',
                // MToon samplers
                'shadeSampler',
                'receiveShadowSampler',
                'shadingGradeSampler',
                'rimSampler',
                'matCapSampler',
                'outlineWidthSampler',
                'uvAnimationMaskSampler',
            ];
            const uniformBuffers = ['Material', 'Scene', 'Mesh'];
            this._eventInfo.fallbacks = fallbacks;
            this._eventInfo.fallbackRank = 0;
            this._eventInfo.defines = defines;
            this._eventInfo.uniforms = uniforms;
            this._eventInfo.attributes = attribs;
            this._eventInfo.samplers = samplers;
            this._eventInfo.uniformBuffersNames = uniformBuffers;
            this._eventInfo.customCode = undefined;
            this._eventInfo.mesh = mesh;
            this._callbackPluginEventGeneric(_babylonjs_core_Materials_materialPluginEvent__WEBPACK_IMPORTED_MODULE_14__.MaterialPluginEvent.PrepareEffect, this._eventInfo);
            // PrePassConfiguration.AddUniforms(uniforms);
            // PrePassConfiguration.AddSamplers(samplers);
            if (_babylonjs_core_Materials_imageProcessingConfiguration__WEBPACK_IMPORTED_MODULE_6__.ImageProcessingConfiguration) {
                _babylonjs_core_Materials_imageProcessingConfiguration__WEBPACK_IMPORTED_MODULE_6__.ImageProcessingConfiguration.PrepareUniforms(uniforms, defines);
                _babylonjs_core_Materials_imageProcessingConfiguration__WEBPACK_IMPORTED_MODULE_6__.ImageProcessingConfiguration.PrepareSamplers(samplers, defines);
            }
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_9__.MaterialHelper.PrepareUniformsAndSamplersList({
                uniformsNames: uniforms,
                uniformBuffersNames: uniformBuffers,
                samplers,
                defines,
                maxSimultaneousLights: this._maxSimultaneousLights,
            });
            const csnrOptions = {};
            const join = defines.toString();
            const previousEffect = subMesh.effect;
            let effect = scene.getEngine().createEffect(shaderName, {
                attributes: attribs,
                uniformsNames: uniforms,
                uniformBuffersNames: uniformBuffers,
                samplers,
                defines: join,
                fallbacks,
                onCompiled: this.onCompiled,
                onError: this.onError,
                indexParameters: {
                    maxSimultaneousLights: this._maxSimultaneousLights,
                    maxSimultaneousMorphTargets: defines.NUM_MORPH_INFLUENCERS,
                },
                processFinalCode: csnrOptions.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: defines.PREPASS,
            }, engine);
            if (effect) {
                if (this._onEffectCreatedObservable) {
                    onCreatedEffectParameters.effect = effect;
                    onCreatedEffectParameters.subMesh = subMesh;
                    this._onEffectCreatedObservable.notifyObservers(onCreatedEffectParameters);
                }
                // Use previous effect while new one is compiling
                if (this.allowShaderHotSwapping && previousEffect && !effect.isReady()) {
                    effect = previousEffect;
                    defines.markAsUnprocessed();
                    if (lightDisposed) {
                        // re register in case it takes more than one frame.
                        defines._areLightsDisposed = true;
                        return false;
                    }
                }
                else {
                    scene.resetCachedMaterial();
                    subMesh.setEffect(effect, defines, this._materialContext);
                }
            }
        }
        if (!subMesh.effect || !subMesh.effect.isReady()) {
            return false;
        }
        defines._renderId = scene.getRenderId();
        subMesh.effect._wasPreviouslyReady = true;
        subMesh.effect._wasPreviouslyUsingInstances = useInstances;
        return true;
    }
    /**
     * Determine the layout of the UniformBufferObject
     * Must be added in the same order as the `uniform Material` in the shader
     * UBOs can be used to efficiently pass variables to shaders, but only WebGL v2 is supported.
     * babylon.js automatically falls back on WebGL v1
     * The second argument is the number of floats
     */
    buildUniformLayout() {
        const ubo = this._uniformBuffer;
        ubo.addUniform('vDiffuseColor', 4);
        ubo.addUniform('vDiffuseInfos', 2);
        ubo.addUniform('diffuseMatrix', 16);
        ubo.addUniform('vEmissiveColor', 3);
        ubo.addUniform('vEmissiveInfos', 2);
        ubo.addUniform('emissiveMatrix', 16);
        ubo.addUniform('vBumpInfos', 3);
        ubo.addUniform('bumpMatrix', 16);
        ubo.addUniform('vShadeColor', 3);
        ubo.addUniform('vShadeInfos', 2);
        ubo.addUniform('shadeMatrix', 16);
        ubo.addUniform('vReceiveShadowInfos', 2);
        ubo.addUniform('receiveShadowMatrix', 16);
        ubo.addUniform('vShadingGradeInfos', 2);
        ubo.addUniform('shadingGradeMatrix', 16);
        ubo.addUniform('vRimColor', 3);
        ubo.addUniform('vRimInfos', 2);
        ubo.addUniform('rimMatrix', 16);
        ubo.addUniform('vMatCapInfos', 2);
        ubo.addUniform('matCapMatrix', 16);
        ubo.addUniform('vOutlineColor', 3);
        ubo.addUniform('vOutlineWidthInfos', 2);
        ubo.addUniform('outlineWidthMatrix', 16);
        ubo.addUniform('vUvAnimationMaskInfos', 2);
        ubo.addUniform('uvAnimationMaskMatrix', 16);
        ubo.addUniform('vTangentSpaceParams', 2);
        ubo.addUniform('pointSize', 1);
        ubo.addUniform('shadingGradeRate', 1);
        ubo.addUniform('receiveShadowRate', 1);
        ubo.addUniform('shadeShift', 1);
        ubo.addUniform('shadeToony', 1);
        ubo.addUniform('lightColorAttenuation', 1);
        ubo.addUniform('indirectLightIntensity', 1);
        ubo.addUniform('rimLightingMix', 1);
        ubo.addUniform('rimFresnelPower', 1);
        ubo.addUniform('rimLift', 1);
        ubo.addUniform('outlineWidth', 1);
        ubo.addUniform('outlineScaledMaxDistance', 1);
        ubo.addUniform('outlineLightingMix', 1);
        ubo.addUniform('uvAnimationScrollX', 1);
        ubo.addUniform('uvAnimationScrollY', 1);
        ubo.addUniform('uvAnimationRotation', 1);
        ubo.addUniform('vEyeUp', 3);
        ubo.addUniform('alphaCutOff', 1);
        ubo.addUniform('vAmbientColor', 3);
        ubo.addUniform('aspect', 1);
        ubo.addUniform('isOutline', 1);
        ubo.addUniform('time', 4);
        ubo.addUniform('visibility', 1);
        super.buildUniformLayout();
    }
    /**
     * {@inheritdoc}
     * Binds current shader variables
     * This method is called every frame, so even if it is redundant, it prefers speed.
     */
    bindForSubMesh(world, mesh, subMesh) {
        var _a;
        const scene = this.getScene();
        const defines = subMesh.materialDefines;
        const effect = subMesh.effect;
        if (!defines || !effect) {
            return;
        }
        this._activeEffect = effect;
        // Matrices Mesh.
        mesh.getMeshUniformBuffer().bindToEffect(effect, 'Mesh');
        mesh.transferToEffect(world);
        // Binding unconditionally
        this._uniformBuffer.bindToEffect(effect, 'Material');
        // this.prePassConfiguration.bindForSubMesh(this._activeEffect, scene, mesh, world, this.isFrozen);
        this._eventInfo.subMesh = subMesh;
        this._callbackPluginEventHardBindForSubMesh(this._eventInfo);
        // Normal Matrix
        if (defines.OBJECTSPACE_NORMALMAP) {
            world.toNormalMatrix(this._normalMatrix);
            this.bindOnlyNormalMatrix(this._normalMatrix);
        }
        const mustRebind = this._mustRebind(scene, effect, mesh.visibility);
        // Bones
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_9__.MaterialHelper.BindBonesParameters(mesh, effect);
        const ubo = this._uniformBuffer;
        if (mustRebind) {
            this.bindViewProjection(effect);
            if (!ubo.useUbo || !this.isFrozen || !ubo.isSync) {
                if (scene.texturesEnabled) {
                    this.bindTexture(this._diffuseTexture, ubo, effect, 'diffuse', 'vDiffuseInfos');
                    this.bindTexture(this._emissiveTexture, ubo, effect, 'emissive', 'vEmissiveInfos');
                    if (this._bumpTexture && scene.getEngine().getCaps().standardDerivatives) {
                        ubo.updateFloat3('vBumpInfos', this._bumpTexture.coordinatesIndex, 1.0 / this._bumpTexture.level, this._bumpScale);
                        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_9__.MaterialHelper.BindTextureMatrix(this._bumpTexture, ubo, 'bump');
                        effect.setTexture(`bumpSampler`, this._bumpTexture);
                        // bumpTexture は babylon.js のデフォルトと反対の状態である
                        if (scene._mirroredCameraPosition) {
                            ubo.updateFloat2('vTangentSpaceParams', this._invertNormalMapX ? 1.0 : -1.0, this._invertNormalMapY ? 1.0 : -1.0);
                        }
                        else {
                            ubo.updateFloat2('vTangentSpaceParams', this._invertNormalMapX ? -1.0 : 1.0, this._invertNormalMapY ? -1.0 : 1.0);
                        }
                    }
                    this.bindTexture(this._shadeTexture, ubo, effect, 'shade', 'vShadeInfos');
                    this.bindTexture(this._receiveShadowTexture, ubo, effect, 'receiveShadow', 'vReceiveShadowInfos');
                    this.bindTexture(this._shadingGradeTexture, ubo, effect, 'shadingGrade', 'vShadingGradeInfos');
                    this.bindTexture(this._rimTexture, ubo, effect, 'rim', 'vRimInfos');
                    this.bindTexture(this._matCapTexture, ubo, effect, 'matCap', 'vMatCapInfos');
                    this.bindTexture(this._outlineWidthTexture, ubo, effect, 'outlineWidth', 'vOutlineWidthInfos');
                    this.bindTexture(this._uvAnimationMaskTexture, ubo, effect, 'uvAnimationMask', 'vUvAnimationMaskInfos');
                    if (this._hasAlphaChannel()) {
                        ubo.updateFloat('alphaCutOff', this.alphaCutOff);
                    }
                }
                // Point size
                if (this.pointsCloud) {
                    ubo.updateFloat('pointSize', this.pointSize);
                }
                // MToon uniforms
                ubo.updateFloat('receiveShadowRate', this._receiveShadowRate);
                ubo.updateFloat('shadingGradeRate', this._shadingGradeRate);
                ubo.updateFloat('shadeShift', this._shadeShift);
                ubo.updateFloat('shadeToony', this._shadeToony);
                ubo.updateFloat('lightColorAttenuation', this._lightColorAttenuation);
                ubo.updateFloat('indirectLightIntensity', this._indirectLightIntensity);
                ubo.updateFloat('rimLightingMix', this._rimLightingMix);
                ubo.updateFloat('rimFresnelPower', this._rimFresnelPower);
                ubo.updateFloat('rimLift', this._rimLift);
                ubo.updateFloat('outlineWidth', this._outlineWidth);
                ubo.updateFloat('outlineScaledMaxDistance', this._outlineScaledMaxDistance);
                ubo.updateFloat('outlineLightingMix', this._outlineLightingMix);
                ubo.updateFloat('uvAnimationScrollX', this._uvAnimationScrollX);
                ubo.updateFloat('uvAnimationScrollY', this._uvAnimationScrollY);
                ubo.updateFloat('uvAnimationRotation', this._uvAnimationRotation);
                // Colors
                scene.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor);
                ubo.updateColor3('vAmbientColor', this._globalAmbientColor);
                ubo.updateColor4('vDiffuseColor', this.diffuseColor, this.alpha);
                ubo.updateColor3('vEmissiveColor', this.emissiveColor);
                ubo.updateColor3('vShadeColor', this.shadeColor);
                ubo.updateColor3('vRimColor', this.rimColor);
                ubo.updateColor4('vOutlineColor', this.outlineColor, 1.0);
                ubo.updateVector3('vEyeUp', scene.activeCamera.upVector);
            }
            // OIT with depth peeling
            const anyScene = scene;
            if (anyScene.useOrderIndependentTransparency && this.needAlphaBlendingForMesh(mesh) && anyScene.depthPeelingRenderer) {
                anyScene.depthPeelingRenderer.bind(effect);
            }
            this._eventInfo.subMesh = subMesh;
            this._callbackPluginEventBindForSubMesh(this._eventInfo);
            // Clip plane
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_9__.MaterialHelper.BindClipPlane(effect, scene);
            // Colors
            this.bindEyePosition(effect);
        }
        else if (scene.getEngine()._features.needToAlwaysBindUniformBuffers) {
            this._needToBindSceneUbo = true;
        }
        if (mustRebind || !this.isFrozen) {
            // Lights
            if (scene.lightsEnabled && !this._disableLighting) {
                _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_9__.MaterialHelper.BindLights(scene, mesh, effect, defines, this._maxSimultaneousLights);
            }
            // View
            if ((scene.fogEnabled && mesh.applyFog && scene.fogMode !== _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_2__.Scene.FOGMODE_NONE) || mesh.receiveShadows) {
                this.bindView(effect);
            }
            // Fog
            _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_9__.MaterialHelper.BindFogParameters(scene, mesh, effect);
            // Morph targets
            if (defines.NUM_MORPH_INFLUENCERS) {
                _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_9__.MaterialHelper.BindMorphTargetParameters(mesh, effect);
            }
            if (defines.BAKED_VERTEX_ANIMATION_TEXTURE) {
                (_a = mesh.bakedVertexAnimationManager) === null || _a === void 0 ? void 0 : _a.bind(effect, defines.INSTANCES);
            }
            // Log. depth
            if (this.useLogarithmicDepth) {
                _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_9__.MaterialHelper.BindLogDepth(defines, effect, scene);
            }
            // image processing
            if (this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess) {
                this._imageProcessingConfiguration.bind(this._activeEffect);
            }
            // MToon bindings
            ubo.updateFloat('aspect', scene.getEngine().getAspectRatio(scene.activeCamera));
            ubo.updateFloat('isOutline', this.isOutline);
            // this variable is compatible with [Unity's _Time](https://docs.unity3d.com/Manual/SL-UnityShaderVariables.html)
            const t = window.performance.now() / 1000;
            ubo.updateVector4('time', new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_3__.Vector4(t / 20, t, t * 2, t * 3));
        }
        this._afterBind(mesh, this._activeEffect);
        ubo.update();
    }
    /**
     * {@inheritdoc}
     */
    getAnimatables() {
        const results = super.getAnimatables();
        for (const texture of this.appendedActiveTextures) {
            if (texture.animations && texture.animations.length > 0) {
                results.push(texture);
            }
        }
        return results;
    }
    /**
     * {@inheritdoc}
     */
    getActiveTextures() {
        const activeTextures = super.getActiveTextures().concat(this.appendedActiveTextures);
        return activeTextures;
    }
    /**
     * {@inheritdoc}
     */
    hasTexture(texture) {
        if (super.hasTexture(texture)) {
            return true;
        }
        for (const tex of this.appendedActiveTextures) {
            if (tex === texture) {
                return true;
            }
        }
        return false;
    }
    /**
     * {@inheritdoc}
     */
    dispose(forceDisposeEffect, forceDisposeTextures) {
        delete this.outlineRenderer;
        if (forceDisposeTextures) {
            for (const texture of this.appendedActiveTextures) {
                texture.dispose();
            }
        }
        if (this._imageProcessingConfiguration && this._imageProcessingObserver) {
            this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver);
        }
        super.dispose(forceDisposeEffect, forceDisposeTextures);
    }
    /**
     * {@inheritdoc}
     */
    clone(name) {
        const result = _babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Clone(() => new MToonMaterial(name, this.getScene()), this);
        result.name = name;
        result.id = name;
        this.stencil.copyTo(result.stencil);
        return result;
    }
    /**
     * {@inheritdoc}
     */
    static Parse(source, scene, rootUrl) {
        const material = _babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Parse(() => new MToonMaterial(source.name, scene), source, scene, rootUrl);
        if (source.stencil) {
            material.stencil.parse(source.stencil, scene, rootUrl);
        }
        return material;
    }
    /**
     * 独自メソッド: テクスチャ情報をバインドする
     * @param texture
     * @param effect
     * @param name
     * @param infoName
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    bindTexture(texture, ubo, effect, name, infoName) {
        if (!texture) {
            return;
        }
        this._uniformBuffer.updateFloat2(infoName, texture.coordinatesIndex, texture.level);
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_9__.MaterialHelper.BindTextureMatrix(texture, ubo, name);
        effect.setTexture(`${name}Sampler`, texture);
    }
    /**
     * 独自メソッド: テクスチャの用意が終わっているか確認する
     * @param texture
     * @param defines
     * @param key
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    isReadyForTexture(texture, defines, key) {
        if (!texture) {
            defines[key] = false;
            return true;
        }
        if (!texture.isReadyOrNotBlocking()) {
            return false;
        }
        _babylonjs_core_Materials_materialHelper__WEBPACK_IMPORTED_MODULE_9__.MaterialHelper.PrepareDefinesForMergedUV(texture, defines, key);
        return true;
    }
    /**
     * 独自メソッド: 定数を設定する
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    applyDefines(defines) {
        switch (this._debugMode) {
            case DebugMode.Normal:
                if (defines.MTOON_DEBUG_NORMAL !== true) {
                    defines.MTOON_DEBUG_NORMAL = true;
                    defines.MTOON_DEBUG_LITSHADERATE = false;
                    defines.markAsUnprocessed();
                }
                break;
            case DebugMode.LitShadeRate:
                if (defines.MTOON_DEBUG_LITSHADERATE !== true) {
                    defines.MTOON_DEBUG_NORMAL = false;
                    defines.MTOON_DEBUG_LITSHADERATE = true;
                    defines.markAsUnprocessed();
                }
                break;
            case DebugMode.None:
                if (defines.MTOON_DEBUG_NORMAL === true) {
                    defines.MTOON_DEBUG_NORMAL = false;
                    defines.markAsUnprocessed();
                }
                if (defines.MTOON_DEBUG_LITSHADERATE === true) {
                    defines.MTOON_DEBUG_LITSHADERATE = false;
                    defines.markAsUnprocessed();
                }
                break;
        }
        switch (this.outlineWidthMode) {
            case OutlineWidthMode.WorldCorrdinates:
                if (defines.MTOON_OUTLINE_WIDTH_WORLD !== true) {
                    defines.MTOON_OUTLINE_WIDTH_WORLD = true;
                    defines.MTOON_OUTLINE_WIDTH_SCREEN = false;
                    defines.markAsUnprocessed();
                }
                break;
            case OutlineWidthMode.ScreenCoordinates:
                if (defines.MTOON_OUTLINE_WIDTH_SCREEN !== true) {
                    defines.MTOON_OUTLINE_WIDTH_WORLD = false;
                    defines.MTOON_OUTLINE_WIDTH_SCREEN = true;
                    defines.markAsUnprocessed();
                }
                break;
            case OutlineWidthMode.None:
                if (defines.MTOON_OUTLINE_WIDTH_SCREEN !== false || defines.MTOON_OUTLINE_WIDTH_WORLD !== false) {
                    defines.MTOON_OUTLINE_WIDTH_SCREEN = false;
                    defines.MTOON_OUTLINE_WIDTH_WORLD = false;
                    defines.markAsUnprocessed();
                }
                break;
        }
        switch (this.outlineColorMode) {
            case OutlineColorMode.FixedColor:
                if (defines.MTOON_OUTLINE_COLOR_FIXED !== true) {
                    defines.MTOON_OUTLINE_COLOR_FIXED = true;
                    defines.MTOON_OUTLINE_COLOR_MIXED = false;
                    defines.markAsUnprocessed();
                }
                break;
            case OutlineColorMode.MixedLighting:
                if (defines.MTOON_OUTLINE_COLOR_MIXED !== true) {
                    defines.MTOON_OUTLINE_COLOR_FIXED = false;
                    defines.MTOON_OUTLINE_COLOR_MIXED = true;
                    defines.markAsUnprocessed();
                }
                break;
        }
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)('diffuseTexture')
], MToonMaterial.prototype, "_diffuseTexture", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)('_markAllSubMeshesAsTexturesAndMiscDirty')
], MToonMaterial.prototype, "diffuseTexture", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)('emissiveTexture')
], MToonMaterial.prototype, "_emissiveTexture", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)('_markAllSubMeshesAsTexturesDirty')
], MToonMaterial.prototype, "emissiveTexture", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)('bumpTexture')
], MToonMaterial.prototype, "_bumpTexture", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)('_markAllSubMeshesAsTexturesDirty')
], MToonMaterial.prototype, "bumpTexture", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)('shadeTexture')
], MToonMaterial.prototype, "_shadeTexture", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)('_markAllSubMeshesAsTexturesDirty')
], MToonMaterial.prototype, "shadeTexture", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)('receiveShadowTexture')
], MToonMaterial.prototype, "_receiveShadowTexture", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)('_markAllSubMeshesAsTexturesDirty')
], MToonMaterial.prototype, "receiveShadowTexture", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)('shadingGradeTexture')
], MToonMaterial.prototype, "_shadingGradeTexture", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)('_markAllSubMeshesAsTexturesDirty')
], MToonMaterial.prototype, "shadingGradeTexture", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)('rimTexture')
], MToonMaterial.prototype, "_rimTexture", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)('_markAllSubMeshesAsTexturesDirty')
], MToonMaterial.prototype, "rimTexture", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)('matCapTexture')
], MToonMaterial.prototype, "_matCapTexture", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)('_markAllSubMeshesAsTexturesDirty')
], MToonMaterial.prototype, "matCapTexture", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)('outlineWidthTexture')
], MToonMaterial.prototype, "_outlineWidthTexture", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)('_markAllSubMeshesAsTexturesDirty')
], MToonMaterial.prototype, "outlineWidthTexture", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)('outlineWidthTexture')
], MToonMaterial.prototype, "_uvAnimationMaskTexture", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)('_markAllSubMeshesAsTexturesDirty')
], MToonMaterial.prototype, "uvAnimationMaskTexture", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)('diffuse')
], MToonMaterial.prototype, "diffuseColor", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)('ambient')
], MToonMaterial.prototype, "ambientColor", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)('emissive')
], MToonMaterial.prototype, "emissiveColor", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)('shade')
], MToonMaterial.prototype, "shadeColor", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)('rim')
], MToonMaterial.prototype, "rimColor", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)('outline')
], MToonMaterial.prototype, "outlineColor", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)('_markAllSubMeshesAsTexturesDirty')
], MToonMaterial.prototype, "useEmissiveAsIllumination", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)('_markAllSubMeshesAsTexturesDirty')
], MToonMaterial.prototype, "linkEmissiveWithDiffuse", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)('_markAllSubMeshesAsTexturesDirty')
], MToonMaterial.prototype, "useReflectionOverAlpha", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)('disableLighting')
], MToonMaterial.prototype, "_disableLighting", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)('_markAllSubMeshesAsLightsDirty')
], MToonMaterial.prototype, "disableLighting", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
], MToonMaterial.prototype, "alphaCutOff", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)('useAlphaFromDiffuseTexture')
], MToonMaterial.prototype, "_useAlphaFromDiffuseTexture", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)('_markAllSubMeshesAsTexturesAndMiscDirty')
], MToonMaterial.prototype, "useAlphaFromDiffuseTexture", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)('maxSimultaneousLights')
], MToonMaterial.prototype, "_maxSimultaneousLights", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)('_markAllSubMeshesAsLightsDirty')
], MToonMaterial.prototype, "maxSimultaneousLights", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)('invertNormalMapX')
], MToonMaterial.prototype, "_invertNormalMapX", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)('_markAllSubMeshesAsTexturesDirty')
], MToonMaterial.prototype, "invertNormalMapX", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)('invertNormalMapY')
], MToonMaterial.prototype, "_invertNormalMapY", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)('_markAllSubMeshesAsTexturesDirty')
], MToonMaterial.prototype, "invertNormalMapY", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)('twoSidedLighting')
], MToonMaterial.prototype, "_twoSidedLighting", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)('_markAllSubMeshesAsTexturesDirty')
], MToonMaterial.prototype, "twoSidedLighting", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
], MToonMaterial.prototype, "bumpScale", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
], MToonMaterial.prototype, "receiveShadowRate", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
], MToonMaterial.prototype, "shadingGradeRate", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
], MToonMaterial.prototype, "shadeShift", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
], MToonMaterial.prototype, "shadeToony", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
], MToonMaterial.prototype, "lightColorAttenuation", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
], MToonMaterial.prototype, "indirectLightIntensity", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
], MToonMaterial.prototype, "rimLightingMix", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
], MToonMaterial.prototype, "rimFresnelPower", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
], MToonMaterial.prototype, "rimLift", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
], MToonMaterial.prototype, "outlineWidth", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
], MToonMaterial.prototype, "outlineScaledMaxDistance", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
], MToonMaterial.prototype, "outlineLightingMix", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
], MToonMaterial.prototype, "uvAnimationScrollX", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
], MToonMaterial.prototype, "uvAnimationScrollY", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
], MToonMaterial.prototype, "uvAnimationRotation", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)('alphaTest')
], MToonMaterial.prototype, "_alphaTest", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
], MToonMaterial.prototype, "alphaTest", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
], MToonMaterial.prototype, "alphaBlend", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)('debugMode')
], MToonMaterial.prototype, "_debugMode", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)('_markAllSubMeshesAsMiscDirty')
], MToonMaterial.prototype, "debugMode", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)('_markAllSubMeshesAsMiscDirty')
], MToonMaterial.prototype, "outlineColorMode", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
], MToonMaterial.prototype, "cullMode", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
], MToonMaterial.prototype, "_outlineCullMode", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.expandToProperty)('_markAllSubMeshesAsMiscDirty')
], MToonMaterial.prototype, "outlineCullMode", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)('flipU')
], MToonMaterial.prototype, "flipU", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)('flipV')
], MToonMaterial.prototype, "flipV", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_babylonjs_core_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
], MToonMaterial.prototype, "useLogarithmicDepth", null);


/***/ }),

/***/ "./src/mtoon-outline-renderer.ts":
/*!***************************************!*\
  !*** ./src/mtoon-outline-renderer.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MToonOutlineRenderer": () => (/* binding */ MToonOutlineRenderer)
/* harmony export */ });
/* harmony import */ var _babylonjs_core_sceneComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core/sceneComponent */ "./node_modules/@babylonjs/core/sceneComponent.js");

// eslint-disable-next-line @typescript-eslint/naming-convention
const BASE_NAME = 'MToonOutline';
/**
 * MToon outline renderer
 * @see OutlineRenderer
 */
class MToonOutlineRenderer {
    /**
     * @inheritdoc
     * MToonMaterial ごとにインスタンスを生成する
     */
    constructor(scene, material) {
        this.scene = scene;
        this.material = material;
        this.name = `${BASE_NAME}_${material.name}_${MToonOutlineRenderer.rendererId++}`;
        this.scene._addComponent(this);
        this._engine = this.scene.getEngine();
        this._passIdForDrawWrapper = [];
        for (let i = 0; i < 1; ++i) {
            this._passIdForDrawWrapper[i] = this._engine.createRenderPassId(`Outline Renderer (${i})`);
        }
    }
    /**
     * @inheritdoc
     * シーン描画前後にレンダリング処理を登録する
     */
    register() {
        this.scene._afterRenderingMeshStage.registerStep(_babylonjs_core_sceneComponent__WEBPACK_IMPORTED_MODULE_0__.SceneComponentConstants.STEP_AFTERRENDERINGMESH_OUTLINE, this, this._afterRenderingMesh);
    }
    /**
     * @inheritdoc
     */
    rebuild() {
        // Nothing to do here.
    }
    /**
     * @inheritdoc
     */
    dispose() {
        for (let i = 0; i < this._passIdForDrawWrapper.length; ++i) {
            this._engine.releaseRenderPassId(this._passIdForDrawWrapper[i]);
        }
    }
    /**
     * Renders the outline in the canvas.
     * @param subMesh Defines the sumesh to render
     * @param batch Defines the batch of meshes in case of instances
     * @param renderPassId Render pass id to use to render the mesh
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars
    render(subMesh, batch, renderPassId) {
        renderPassId = renderPassId !== null && renderPassId !== void 0 ? renderPassId : this._passIdForDrawWrapper[0];
        const scene = this.scene;
        const effect = subMesh.effect;
        if (!effect || !effect.isReady() || !this.scene.activeCamera) {
            return;
        }
        const drawWrapper = subMesh._getDrawWrapper(renderPassId, true);
        if (!drawWrapper) {
            return;
        }
        drawWrapper.setEffect(effect);
        if (!drawWrapper.effect || !drawWrapper.effect.isReady()) {
            return;
        }
        const ownerMesh = subMesh.getMesh();
        const replacementMesh = ownerMesh._internalAbstractMeshDataInfo._actAsRegularMesh ? ownerMesh : null;
        const renderingMesh = subMesh.getRenderingMesh();
        const effectiveMesh = replacementMesh ? replacementMesh : renderingMesh;
        if (!scene.activeCamera) {
            return;
        }
        this.material.applyOutlineCullMode();
        this.material.enableOutlineRender();
        this._engine.enableEffect(drawWrapper);
        if (!this.isHardwareInstancedRendering(subMesh, batch)) {
            renderingMesh._bind(subMesh, effect, this.material.fillMode);
        }
        this.material._preBind(effect);
        renderingMesh._processRendering(effectiveMesh, subMesh, effect, this.material.fillMode, batch, this.isHardwareInstancedRendering(subMesh, batch), (isInstance, world, effectiveMaterial) => {
            if (effectiveMaterial) {
                effectiveMaterial.bindForSubMesh(world, effectiveMesh, subMesh);
            }
        }, this.material);
        this.material.restoreOutlineCullMode();
        this.material.disaableOutlineRender();
    }
    /**
     * このメッシュを描画した後に実行されるコールバック
     */
    _afterRenderingMesh(mesh, subMesh, batch) {
        if (!this.willRender(subMesh)) {
            return;
        }
        const cullBackFaces = this._engine.cullBackFaces;
        this._engine.cullBackFaces = false;
        this.render(subMesh, batch, this._passIdForDrawWrapper[0]);
        this._engine.cullBackFaces = cullBackFaces;
    }
    /**
     * インスタンシングを行うかどうか
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    isHardwareInstancedRendering(subMesh, batch) {
        if (!this._engine.getCaps().instancedArrays) {
            return false;
        }
        if (batch.visibleInstances[subMesh._id] === null) {
            return false;
        }
        if (typeof batch.visibleInstances[subMesh._id] === 'undefined') {
            return false;
        }
        return subMesh.getRenderingMesh().hasThinInstances;
    }
    /**
     * このメッシュでアウトラインを描画するかどうか
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    willRender(subMesh) {
        const material = subMesh.getMaterial();
        if (!material || material.getClassName() !== 'MToonMaterial' || material.getOutlineRendererName() !== this.name) {
            // このコンポーネントの Material ではない
            return false;
        }
        return true;
    }
}
// eslint-disable-next-line @typescript-eslint/naming-convention
MToonOutlineRenderer.rendererId = 0;


/***/ }),

/***/ "./src/test/index.ts":
/*!***************************!*\
  !*** ./src/test/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babylonjs_core_Cameras_arcRotateCamera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core/Cameras/arcRotateCamera */ "./node_modules/@babylonjs/core/Cameras/arcRotateCamera.js");
/* harmony import */ var _babylonjs_core_Engines_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core/Engines/engine */ "./node_modules/@babylonjs/core/Engines/engine.js");
/* harmony import */ var _babylonjs_core_Lights_directionalLight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babylonjs/core/Lights/directionalLight */ "./node_modules/@babylonjs/core/Lights/directionalLight.js");
/* harmony import */ var _babylonjs_core_Lights_hemisphericLight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babylonjs/core/Lights/hemisphericLight */ "./node_modules/@babylonjs/core/Lights/hemisphericLight.js");
/* harmony import */ var _babylonjs_core_Lights_pointLight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babylonjs/core/Lights/pointLight */ "./node_modules/@babylonjs/core/Lights/pointLight.js");
/* harmony import */ var _babylonjs_core_Lights_Shadows_shadowGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babylonjs/core/Lights/Shadows/shadowGenerator */ "./node_modules/@babylonjs/core/Lights/Shadows/shadowGenerator.js");
/* harmony import */ var _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babylonjs/core/Materials/Textures/texture */ "./node_modules/@babylonjs/core/Materials/Textures/texture.js");
/* harmony import */ var _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babylonjs/core/Maths/math */ "./node_modules/@babylonjs/core/Maths/math.js");
/* harmony import */ var _babylonjs_core_Meshes_Builders_sphereBuilder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babylonjs/core/Meshes/Builders/sphereBuilder */ "./node_modules/@babylonjs/core/Meshes/Builders/sphereBuilder.js");
/* harmony import */ var _babylonjs_core_Meshes_Builders_torusKnotBuilder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babylonjs/core/Meshes/Builders/torusKnotBuilder */ "./node_modules/@babylonjs/core/Meshes/Builders/torusKnotBuilder.js");
/* harmony import */ var _babylonjs_core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babylonjs/core/Buffers/buffer */ "./node_modules/@babylonjs/core/Buffers/buffer.js");
/* harmony import */ var _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babylonjs/core/scene */ "./node_modules/@babylonjs/core/scene.js");
/* harmony import */ var _mtoon_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../mtoon-material */ "./src/mtoon-material.ts");
/* harmony import */ var _babylonjs_core_Helpers_sceneHelpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babylonjs/core/Helpers/sceneHelpers */ "./node_modules/@babylonjs/core/Helpers/sceneHelpers.js");
/* harmony import */ var _babylonjs_inspector__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babylonjs/inspector */ "./node_modules/@babylonjs/inspector/dist/babylon.inspector.bundle.max.js");
/* harmony import */ var _babylonjs_inspector__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babylonjs_inspector__WEBPACK_IMPORTED_MODULE_14__);















async function main() {
    const debugProperties = getDebugProperties();
    const canvas = document.getElementById('main-canvas');
    const engine = new _babylonjs_core_Engines_engine__WEBPACK_IMPORTED_MODULE_1__.Engine(canvas, true, {
        alpha: false,
        disableWebGL2Support: debugProperties.webgl1,
    });
    const scene = new _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_11__.Scene(engine);
    const camera = new _babylonjs_core_Cameras_arcRotateCamera__WEBPACK_IMPORTED_MODULE_0__.ArcRotateCamera('MainCamera1', 0, 0, 3, new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Vector3(0, 1.5, 0), scene, true);
    camera.lowerRadiusLimit = 0.1;
    camera.upperRadiusLimit = 20;
    camera.wheelDeltaPercentage = 0.01;
    camera.setPosition(new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Vector3(0, 1.5, -3));
    camera.setTarget(new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Vector3(0, 1.5, 0));
    camera.attachControl(canvas);
    scene.createDefaultEnvironment({
        createGround: true,
        createSkybox: false,
        enableGroundMirror: false,
        enableGroundShadow: false,
    });
    // Lights
    const directionalLight = new _babylonjs_core_Lights_directionalLight__WEBPACK_IMPORTED_MODULE_2__.DirectionalLight('DirectionalLight1', new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Vector3(1, -0.5, 0.0), scene);
    directionalLight.position = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Vector3(-50, 25, 0);
    directionalLight.setEnabled(true);
    const hemisphericLight = new _babylonjs_core_Lights_hemisphericLight__WEBPACK_IMPORTED_MODULE_3__.HemisphericLight('HemisphericLight1', new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Vector3(-0.2, -0.8, -1), scene);
    hemisphericLight.setEnabled(false);
    const pointLight = new _babylonjs_core_Lights_pointLight__WEBPACK_IMPORTED_MODULE_4__.PointLight('PointLight1', new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Vector3(0, 0, 1), scene);
    pointLight.setEnabled(false);
    // Meshes
    const standardMaterialSphere = (0,_babylonjs_core_Meshes_Builders_sphereBuilder__WEBPACK_IMPORTED_MODULE_8__.CreateSphere)('StandardMaterialSphere1', {}, scene);
    standardMaterialSphere.position = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Vector3(1.2, 1.2, 0);
    standardMaterialSphere.receiveShadows = true;
    const shadowCaster = (0,_babylonjs_core_Meshes_Builders_torusKnotBuilder__WEBPACK_IMPORTED_MODULE_9__.CreateTorusKnot)('ShadowCaster', {}, scene);
    shadowCaster.position = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Vector3(-10.0, 5.0, 0.0);
    shadowCaster.setEnabled(debugProperties.shadow);
    if (debugProperties.shadow) {
        const shadowGenerator = new _babylonjs_core_Lights_Shadows_shadowGenerator__WEBPACK_IMPORTED_MODULE_5__.ShadowGenerator(1024, directionalLight);
        shadowGenerator.addShadowCaster(shadowCaster);
    }
    const mtoonMaterials = [];
    {
        const mat = new _mtoon_material__WEBPACK_IMPORTED_MODULE_12__.MToonMaterial('MtoonMaterialDefault', scene);
        mat.outlineWidthMode = 1;
        mtoonMaterials.push(mat);
    }
    {
        const mat = new _mtoon_material__WEBPACK_IMPORTED_MODULE_12__.MToonMaterial('MtoonMaterialNormal', scene);
        mat.outlineWidthMode = 2;
        // Textures from https://www.babylonjs-playground.com/#20OAV9#33
        const diffuse = new _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_6__.Texture('http://i.imgur.com/Wk1cGEq.png', scene);
        diffuse.uScale = 4;
        diffuse.vScale = 4;
        mat.diffuseTexture = diffuse;
        mat.shadeTexture = mat.diffuseTexture.clone();
        mat.shadeColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Color3(0.871, 0.196, 0.416);
        const bump = new _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_6__.Texture('http://i.imgur.com/wGyk6os.png', scene);
        bump.uScale = 4;
        bump.vScale = 4;
        mat.bumpTexture = bump;
        mtoonMaterials.push(mat);
    }
    {
        const mat = new _mtoon_material__WEBPACK_IMPORTED_MODULE_12__.MToonMaterial('MtoonMaterialTransparent', scene);
        mat.outlineWidthMode = 1;
        // Textures from https://www.babylonjs-playground.com/#YDO1F#18
        mat.diffuseTexture = new _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_6__.Texture('https://upload.wikimedia.org/wikipedia/commons/8/87/Alaskan_Malamute%2BBlank.png', scene);
        mat.diffuseTexture.hasAlpha = true;
        mat.shadeTexture = mat.diffuseTexture.clone();
        mat.alphaBlend = true;
        mtoonMaterials.push(mat);
    }
    {
        const mat = new _mtoon_material__WEBPACK_IMPORTED_MODULE_12__.MToonMaterial('MtoonMaterialTransparentCutout', scene);
        mat.outlineWidthMode = 1;
        // Textures from https://www.babylonjs-playground.com/#YDO1F#18
        mat.diffuseTexture = new _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_6__.Texture('https://upload.wikimedia.org/wikipedia/commons/8/87/Alaskan_Malamute%2BBlank.png', scene);
        mat.diffuseTexture.hasAlpha = true;
        mat.shadeTexture = mat.diffuseTexture.clone();
        mat.alphaTest = true;
        mat.alphaCutOff = 0.5;
        mtoonMaterials.push(mat);
    }
    {
        const mat = new _mtoon_material__WEBPACK_IMPORTED_MODULE_12__.MToonMaterial('MtoonMaterialRim', scene);
        mat.outlineWidthMode = 1;
        mat.diffuseColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Color3(0, 0, 0);
        mat.shadeColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Color3(0, 0, 0);
        mat.rimColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Color3(1, 1, 1);
        mtoonMaterials.push(mat);
    }
    {
        const mat = new _mtoon_material__WEBPACK_IMPORTED_MODULE_12__.MToonMaterial('MtoonMaterialMatCap', scene);
        // Textures from https://www.outworldz.com/cgi/free-seamless-textures.plx?c=UV%20Checker
        mat.matCapTexture = new _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_6__.Texture('resources/matcap.png', scene, true, false);
        mat.diffuseColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Color3(0, 0, 0);
        mat.shadeColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Color3(0, 0, 0);
        mtoonMaterials.push(mat);
    }
    {
        const mat = new _mtoon_material__WEBPACK_IMPORTED_MODULE_12__.MToonMaterial('MtoonMaterialScroll', scene);
        mat.outlineWidthMode = 1;
        // Textures from https://www.babylonjs-playground.com/#20OAV9#33
        const diffuse = new _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_6__.Texture('http://i.imgur.com/Wk1cGEq.png', scene);
        diffuse.uScale = 4;
        diffuse.vScale = 4;
        mat.diffuseTexture = diffuse;
        mat.shadeTexture = mat.diffuseTexture.clone();
        mat.shadeColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Color3(0.5, 0.5, 0.5);
        const bump = new _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_6__.Texture('http://i.imgur.com/wGyk6os.png', scene);
        bump.uScale = 4;
        bump.vScale = 4;
        mat.bumpTexture = bump;
        mat.uvAnimationScrollX = 0.5;
        mtoonMaterials.push(mat);
    }
    {
        const mat = new _mtoon_material__WEBPACK_IMPORTED_MODULE_12__.MToonMaterial('MtoonMaterialScrollY', scene);
        mat.outlineWidthMode = 1;
        // Textures from https://www.babylonjs-playground.com/#20OAV9#33
        const diffuse = new _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_6__.Texture('http://i.imgur.com/Wk1cGEq.png', scene);
        diffuse.uScale = 4;
        diffuse.vScale = 4;
        mat.diffuseTexture = diffuse;
        mat.shadeTexture = mat.diffuseTexture.clone();
        mat.shadeColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Color3(0.5, 0.5, 0.5);
        const bump = new _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_6__.Texture('http://i.imgur.com/wGyk6os.png', scene);
        bump.uScale = 4;
        bump.vScale = 4;
        mat.bumpTexture = bump;
        mat.uvAnimationScrollY = 0.5;
        mtoonMaterials.push(mat);
    }
    {
        const mat = new _mtoon_material__WEBPACK_IMPORTED_MODULE_12__.MToonMaterial('MtoonMaterialRotation', scene);
        mat.outlineWidthMode = 1;
        // Textures from https://www.babylonjs-playground.com/#20OAV9#33
        const diffuse = new _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_6__.Texture('http://i.imgur.com/Wk1cGEq.png', scene);
        diffuse.uScale = 4;
        diffuse.vScale = 4;
        mat.diffuseTexture = diffuse;
        mat.shadeTexture = mat.diffuseTexture.clone();
        mat.shadeColor = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Color3(0.5, 0.5, 0.5);
        const bump = new _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_6__.Texture('http://i.imgur.com/wGyk6os.png', scene);
        bump.uScale = 4;
        bump.vScale = 4;
        mat.bumpTexture = bump;
        mat.uvAnimationRotation = 0.1;
        mtoonMaterials.push(mat);
    }
    mtoonMaterials.forEach((mat, index) => {
        // MToonMaterial は glTF(右手座標) を考慮しているため、 CullMode をデフォルトから反転させる
        mat.cullMode = 1;
        const sphere = (0,_babylonjs_core_Meshes_Builders_sphereBuilder__WEBPACK_IMPORTED_MODULE_8__.CreateSphere)(`${mat.name}_Sphere`, {}, scene);
        sphere.position = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Vector3(-1.2 * index, 1.2, 0);
        sphere.receiveShadows = true;
        sphere.material = mat;
    });
    {
        // No Normal
        const mat = new _mtoon_material__WEBPACK_IMPORTED_MODULE_12__.MToonMaterial('MToonMaterialNoNormal', scene);
        mat.cullMode = 1;
        mat.outlineCullMode = 2;
        mat.outlineWidthMode = 1;
        const sphere = (0,_babylonjs_core_Meshes_Builders_sphereBuilder__WEBPACK_IMPORTED_MODULE_8__.CreateSphere)('MToonMaterialNoNormal_Sphere', {}, scene);
        sphere.position = new _babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Vector3(2.4, 1.2, 0);
        sphere.receiveShadows = true;
        sphere.material = mat;
        if (sphere.geometry) {
            sphere.geometry.removeVerticesData(_babylonjs_core_Buffers_buffer__WEBPACK_IMPORTED_MODULE_10__.VertexBuffer.NormalKind);
        }
    }
    if (debugProperties.inspector) {
        await scene.debugLayer.show({
            globalRoot: document.getElementById('wrapper'),
            handleResize: true,
        });
    }
    engine.runRenderLoop(() => {
        scene.render();
        shadowCaster.rotate(_babylonjs_core_Maths_math__WEBPACK_IMPORTED_MODULE_7__.Vector3.Up(), 0.01);
    });
    window.addEventListener('resize', () => {
        engine.resize();
    });
    window.currentScene = scene;
}
function getDebugProperties() {
    const href = window.location.href;
    return {
        webgl1: href.includes('webgl1'),
        shadow: href.includes('shadow'),
        inspector: href.includes('inspector'),
    };
}
main().catch((reason) => {
    console.error(reason);
});


/***/ }),

/***/ "./src/shaders/bump-fragment.frag":
/*!****************************************!*\
  !*** ./src/shaders/bump-fragment.frag ***!
  \****************************************/
/***/ ((module) => {

module.exports = "// replace vBumpUV to mainUv\nvec2 uvOffset = vec2(0.0, 0.0);\n\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n    #ifdef NORMALXYSCALE\n        float normalScale = 1.0;\n    #elif defined(BUMP)\n        float normalScale = vBumpInfos.y;\n    #else\n        float normalScale = 1.0;\n    #endif\n\n    #if defined(TANGENT) && defined(NORMAL)\n        mat3 TBN = vTBN;\n    #elif defined(BUMP)\n        // vec2 TBNUV = gl_FrontFacing ? vBumpUV : -vBumpUV;\n        vec2 TBNUV = gl_FrontFacing ? mainUv : -mainUv;\n        mat3 TBN = cotangent_frame(normalW * normalScale, vPositionW, TBNUV, vTangentSpaceParams);\n    #else\n        vec2 TBNUV = gl_FrontFacing ? vDetailUV : -vDetailUV;\n        mat3 TBN = cotangent_frame(normalW * normalScale, vPositionW, TBNUV, vec2(1., 1.));\n    #endif\n#elif defined(ANISOTROPIC)\n    #if defined(TANGENT) && defined(NORMAL)\n        mat3 TBN = vTBN;\n    #else\n        // flip the uv for the backface\n        vec2 TBNUV = gl_FrontFacing ? vMainUV1 : -vMainUV1;\n        mat3 TBN = cotangent_frame(normalW, vPositionW, TBNUV, vec2(1., 1.));\n    #endif\n#endif\n\n#ifdef PARALLAX\n    mat3 invTBN = transposeMat3(TBN);\n\n    #ifdef PARALLAXOCCLUSION\n        // uvOffset = parallaxOcclusion(invTBN * -viewDirectionW, invTBN * normalW, vBumpUV, vBumpInfos.z);\n        uvOffset = parallaxOcclusion(invTBN * -viewDirectionW, invTBN * normalW, mainUv, vBumpInfos.z);\n    #else\n        uvOffset = parallaxOffset(invTBN * viewDirectionW, vBumpInfos.z);\n    #endif\n#endif\n\n#ifdef DETAIL\n    vec4 detailColor = texture2D(detailSampler, vDetailUV + uvOffset);\n    vec2 detailNormalRG = detailColor.wy * 2.0 - 1.0;\n    float detailNormalB = sqrt(1. - saturate(dot(detailNormalRG, detailNormalRG)));\n    vec3 detailNormal = vec3(detailNormalRG, detailNormalB);\n#endif\n\n#ifdef BUMP\n    #ifdef OBJECTSPACE_NORMALMAP\n        // normalW = normalize(texture2D(bumpSampler, vBumpUV).xyz  * 2.0 - 1.0);\n        normalW = normalize(texture2D(bumpSampler, mainUv).xyz  * 2.0 - 1.0);\n        normalW = normalize(mat3(normalMatrix) * normalW);\n    #elif !defined(DETAIL)\n        // normalW = perturbNormal(TBN, texture2D(bumpSampler, vBumpUV + uvOffset).xyz, vBumpInfos.y);\n        normalW = perturbNormal(TBN, texture2D(bumpSampler, mainUv + uvOffset).xyz, vBumpInfos.y);\n    #else\n        // vec3 bumpNormal = texture2D(bumpSampler, vBumpUV + uvOffset).xyz * 2.0 - 1.0;\n        vec3 bumpNormal = texture2D(bumpSampler, mainUv + uvOffset).xyz * 2.0 - 1.0;\n        // Reference for normal blending: https://blog.selfshadow.com/publications/blending-in-detail/\n        #if DETAIL_NORMALBLENDMETHOD == 0 // whiteout\n            detailNormal.xy *= vDetailInfos.z;\n            vec3 blendedNormal = normalize(vec3(bumpNormal.xy + detailNormal.xy, bumpNormal.z * detailNormal.z));\n        #elif DETAIL_NORMALBLENDMETHOD == 1 // RNM\n            detailNormal.xy *= vDetailInfos.z;\n            bumpNormal += vec3(0.0, 0.0, 1.0);\n            detailNormal *= vec3(-1.0, -1.0, 1.0);\n            vec3 blendedNormal = bumpNormal * dot(bumpNormal, detailNormal) / bumpNormal.z - detailNormal;\n        #endif\n        normalW = perturbNormalBase(TBN, blendedNormal, vBumpInfos.y);\n    #endif\n#elif defined(DETAIL)\n        detailNormal.xy *= vDetailInfos.z;\n        normalW = perturbNormalBase(TBN, detailNormal, vDetailInfos.z);\n#endif\n";

/***/ }),

/***/ "./src/shaders/fragment-declaration.frag":
/*!***********************************************!*\
  !*** ./src/shaders/fragment-declaration.frag ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "uniform vec4 vEyePosition;\n\n// Colors\nuniform vec4 vDiffuseColor;\nuniform vec3 vEmissiveColor;\nuniform vec3 vShadeColor;\nuniform vec3 vRimColor;\nuniform vec4 vOutlineColor;\nuniform vec3 vAmbientColor;\n\nuniform vec3 vEyeUp;\nuniform float aspect;\nuniform float alphaCutOff;\nuniform float visibility;\nuniform float isOutline;\nuniform vec4 time;\n\n// Samplers\n#ifdef DIFFUSE\nuniform vec2 vDiffuseInfos;\n#endif\n\n#ifdef EMISSIVE\nuniform vec2 vEmissiveInfos;\n#endif\n\n#ifdef BUMP\nuniform vec3 vBumpInfos;\nuniform vec2 vTangentSpaceParams;\n#endif\n\n#ifdef SHADE\nuniform vec2 vShadeInfos;\n#endif\n\n#ifdef RECEIVE_SHADOW\nuniform vec2 vReceiveShadowInfos;\n#endif\n\n#ifdef SHADING_GRADE\nuniform vec2 vShadingGradeInfos;\n#endif\n\n#ifdef RIM\nuniform vec2 vRimInfos;\n#endif\n\n#ifdef MATCAP\nuniform vec2 vMatCapInfos;\n#endif\n\n#ifdef OUTLINE_WIDTH\nuniform vec2 vOutlineWidthInfos;\n#endif\n\n#ifdef UV_ANIMATION_MASK\nuniform vec2 vUvAnimationMaskInfos;\n#endif\n\n// MToon params\nuniform float shadingGradeRate;\nuniform float receiveShadowRate;\nuniform float shadeShift;\nuniform float shadeToony;\nuniform float lightColorAttenuation;\nuniform float indirectLightIntensity;\nuniform float rimLightingMix;\nuniform float rimFresnelPower;\nuniform float rimLift;\nuniform float outlineWidth;\nuniform float outlineScaledMaxDistance;\nuniform float outlineLightingMix;\nuniform float uvAnimationScrollX;\nuniform float uvAnimationScrollY;\nuniform float uvAnimationRotation;\n";

/***/ }),

/***/ "./src/shaders/light-fragment.frag":
/*!*****************************************!*\
  !*** ./src/shaders/light-fragment.frag ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "#ifdef LIGHT{X}\n    #if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n        //No light calculation\n    #else\n        #ifdef PBR\n            // Compute Pre Lighting infos\n            #ifdef SPOTLIGHT{X}\n                preInfo = computePointAndSpotPreLightingInfo(light{X}.vLightData, viewDirectionW, normalW);\n            #elif defined(POINTLIGHT{X})\n                preInfo = computePointAndSpotPreLightingInfo(light{X}.vLightData, viewDirectionW, normalW);\n            #elif defined(HEMILIGHT{X})\n                preInfo = computeHemisphericPreLightingInfo(light{X}.vLightData, viewDirectionW, normalW);\n            #elif defined(DIRLIGHT{X})\n                preInfo = computeDirectionalPreLightingInfo(light{X}.vLightData, viewDirectionW, normalW);\n            #endif\n\n            preInfo.NdotV = NdotV;\n\n            // Compute Attenuation infos\n            #ifdef SPOTLIGHT{X}\n                #ifdef LIGHT_FALLOFF_GLTF{X}\n                    preInfo.attenuation = computeDistanceLightFalloff_GLTF(preInfo.lightDistanceSquared, light{X}.vLightFalloff.y);\n                    preInfo.attenuation *= computeDirectionalLightFalloff_GLTF(light{X}.vLightDirection.xyz, preInfo.L, light{X}.vLightFalloff.z, light{X}.vLightFalloff.w);\n                #elif defined(LIGHT_FALLOFF_PHYSICAL{X})\n                    preInfo.attenuation = computeDistanceLightFalloff_Physical(preInfo.lightDistanceSquared);\n                    preInfo.attenuation *= computeDirectionalLightFalloff_Physical(light{X}.vLightDirection.xyz, preInfo.L, light{X}.vLightDirection.w);\n                #elif defined(LIGHT_FALLOFF_STANDARD{X})\n                    preInfo.attenuation = computeDistanceLightFalloff_Standard(preInfo.lightOffset, light{X}.vLightFalloff.x);\n                    preInfo.attenuation *= computeDirectionalLightFalloff_Standard(light{X}.vLightDirection.xyz, preInfo.L, light{X}.vLightDirection.w, light{X}.vLightData.w);\n                #else\n                    preInfo.attenuation = computeDistanceLightFalloff(preInfo.lightOffset, preInfo.lightDistanceSquared, light{X}.vLightFalloff.x, light{X}.vLightFalloff.y);\n                    preInfo.attenuation *= computeDirectionalLightFalloff(light{X}.vLightDirection.xyz, preInfo.L, light{X}.vLightDirection.w, light{X}.vLightData.w, light{X}.vLightFalloff.z, light{X}.vLightFalloff.w);\n                #endif\n            #elif defined(POINTLIGHT{X})\n                #ifdef LIGHT_FALLOFF_GLTF{X}\n                    preInfo.attenuation = computeDistanceLightFalloff_GLTF(preInfo.lightDistanceSquared, light{X}.vLightFalloff.y);\n                #elif defined(LIGHT_FALLOFF_PHYSICAL{X})\n                    preInfo.attenuation = computeDistanceLightFalloff_Physical(preInfo.lightDistanceSquared);\n                #elif defined(LIGHT_FALLOFF_STANDARD{X})\n                    preInfo.attenuation = computeDistanceLightFalloff_Standard(preInfo.lightOffset, light{X}.vLightFalloff.x);\n                #else\n                    preInfo.attenuation = computeDistanceLightFalloff(preInfo.lightOffset, preInfo.lightDistanceSquared, light{X}.vLightFalloff.x, light{X}.vLightFalloff.y);\n                #endif\n            #else\n                preInfo.attenuation = 1.0;\n            #endif\n\n            // Simulates Light radius for diffuse and spec term\n            // clear coat is using a dedicated roughness\n            #ifdef HEMILIGHT{X}\n                preInfo.roughness = roughness;\n            #else\n                preInfo.roughness = adjustRoughnessFromLightProperties(roughness, light{X}.vLightSpecular.a, preInfo.lightDistance);\n            #endif\n\n            // Diffuse contribution\n            #ifdef HEMILIGHT{X}\n                info.diffuse = computeHemisphericDiffuseLighting(preInfo, light{X}.vLightDiffuse.rgb, light{X}.vLightGround);\n            #elif defined(SS_TRANSLUCENCY)\n                info.diffuse = computeDiffuseAndTransmittedLighting(preInfo, light{X}.vLightDiffuse.rgb, subSurfaceOut.transmittance);\n            #else\n                info.diffuse = computeDiffuseLighting(preInfo, light{X}.vLightDiffuse.rgb);\n            #endif\n\n            // Specular contribution\n            #ifdef SPECULARTERM\n                #ifdef ANISOTROPIC\n                    info.specular = computeAnisotropicSpecularLighting(preInfo, viewDirectionW, normalW, anisotropicOut.anisotropicTangent, anisotropicOut.anisotropicBitangent, anisotropicOut.anisotropy, clearcoatOut.specularEnvironmentR0, specularEnvironmentR90, AARoughnessFactors.x, light{X}.vLightDiffuse.rgb);\n                #else\n                    info.specular = computeSpecularLighting(preInfo, normalW, clearcoatOut.specularEnvironmentR0, specularEnvironmentR90, AARoughnessFactors.x, light{X}.vLightDiffuse.rgb);\n                #endif\n            #endif\n\n            // Sheen contribution\n            #ifdef SHEEN\n                #ifdef SHEEN_LINKWITHALBEDO\n                    // BE Carefull: Sheen intensity is replacing the roughness value.\n                    preInfo.roughness = sheenOut.sheenIntensity;\n                #else\n                    #ifdef HEMILIGHT{X}\n                        preInfo.roughness = sheenOut.sheenRoughness;\n                    #else\n                        preInfo.roughness = adjustRoughnessFromLightProperties(sheenOut.sheenRoughness, light{X}.vLightSpecular.a, preInfo.lightDistance);\n                    #endif\n                #endif\n                info.sheen = computeSheenLighting(preInfo, normalW, sheenOut.sheenColor, specularEnvironmentR90, AARoughnessFactors.x, light{X}.vLightDiffuse.rgb);\n            #endif\n\n            // Clear Coat contribution\n            #ifdef CLEARCOAT\n                // Simulates Light radius\n                #ifdef HEMILIGHT{X}\n                    preInfo.roughness = clearcoatOut.clearCoatRoughness;\n                #else\n                    preInfo.roughness = adjustRoughnessFromLightProperties(clearcoatOut.clearCoatRoughness, light{X}.vLightSpecular.a, preInfo.lightDistance);\n                #endif\n\n                info.clearCoat = computeClearCoatLighting(preInfo, clearcoatOut.clearCoatNormalW, clearcoatOut.clearCoatAARoughnessFactors.x, clearcoatOut.clearCoatIntensity, light{X}.vLightDiffuse.rgb);\n\n                #ifdef CLEARCOAT_TINT\n                    // Absorption\n                    absorption = computeClearCoatLightingAbsorption(clearcoatOut.clearCoatNdotVRefract, preInfo.L, clearcoatOut.clearCoatNormalW, clearcoatOut.clearCoatColor, clearcoatOut.clearCoatThickness, clearcoatOut.clearCoatIntensity);\n                    info.diffuse *= absorption;\n                    #ifdef SPECULARTERM\n                        info.specular *= absorption;\n                    #endif\n                #endif\n\n                // Apply energy conservation on diffuse and specular term.\n                info.diffuse *= info.clearCoat.w;\n                #ifdef SPECULARTERM\n                    info.specular *= info.clearCoat.w;\n                #endif\n                #ifdef SHEEN\n                    info.sheen *= info.clearCoat.w;\n                #endif\n            #endif\n        #else\n            #ifdef SPOTLIGHT{X}\n                info = computeSpotLighting(viewDirectionW, normalW, light{X}.vLightData, light{X}.vLightDirection, light{X}.vLightDiffuse.rgb, light{X}.vLightSpecular.rgb, light{X}.vLightDiffuse.a, glossiness);\n            #elif defined(HEMILIGHT{X})\n                info = computeHemisphericLighting(viewDirectionW, normalW, light{X}.vLightData, light{X}.vLightDiffuse.rgb, light{X}.vLightSpecular.rgb, light{X}.vLightGround, glossiness);\n            #elif defined(POINTLIGHT{X}) || defined(DIRLIGHT{X})\n                info = computeLighting(viewDirectionW, normalW, light{X}.vLightData, light{X}.vLightDiffuse.rgb, light{X}.vLightSpecular.rgb, light{X}.vLightDiffuse.a, glossiness);\n            #endif\n        #endif\n\n        #ifdef PROJECTEDLIGHTTEXTURE{X}\n            info.diffuse *= computeProjectionTextureDiffuseLighting(projectionLightSampler{X}, textureProjectionMatrix{X});\n        #endif\n    #endif\n\n    #ifdef SHADOW{X}\n        #ifdef SHADOWCSM{X}\n            for (int i = 0; i < SHADOWCSMNUM_CASCADES{X}; i++)\n            {\n                #ifdef SHADOWCSM_RIGHTHANDED{X}\n                    diff{X} = viewFrustumZ{X}[i] + vPositionFromCamera{X}.z;\n                #else\n                    diff{X} = viewFrustumZ{X}[i] - vPositionFromCamera{X}.z;\n                #endif\n                if (diff{X} >= 0.) {\n                    index{X} = i;\n                    break;\n                }\n            }\n\n            #ifdef SHADOWCSMUSESHADOWMAXZ{X}\n            if (index{X} >= 0)\n            #endif\n            {\n                #if defined(SHADOWPCF{X})\n                    #if defined(SHADOWLOWQUALITY{X})\n                        shadow = computeShadowWithCSMPCF1(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n                    #elif defined(SHADOWMEDIUMQUALITY{X})\n                        shadow = computeShadowWithCSMPCF3(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], shadowSampler{X}, light{X}.shadowsInfo.yz, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n                    #else\n                        shadow = computeShadowWithCSMPCF5(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], shadowSampler{X}, light{X}.shadowsInfo.yz, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n                    #endif\n                #elif defined(SHADOWPCSS{X})\n                    #if defined(SHADOWLOWQUALITY{X})\n                        shadow = computeShadowWithCSMPCSS16(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w, lightSizeUVCorrection{X}[index{X}], depthCorrection{X}[index{X}], penumbraDarkness{X});\n                    #elif defined(SHADOWMEDIUMQUALITY{X})\n                        shadow = computeShadowWithCSMPCSS32(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w, lightSizeUVCorrection{X}[index{X}], depthCorrection{X}[index{X}], penumbraDarkness{X});\n                    #else\n                        shadow = computeShadowWithCSMPCSS64(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w, lightSizeUVCorrection{X}[index{X}], depthCorrection{X}[index{X}], penumbraDarkness{X});\n                    #endif\n                #else\n                    shadow = computeShadowCSM(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n                #endif\n\n                #ifdef SHADOWCSMDEBUG{X}\n                    shadowDebug{X} = vec3(shadow) * vCascadeColorsMultiplier{X}[index{X}];\n                #endif\n\n                #ifndef SHADOWCSMNOBLEND{X}\n                    float frustumLength = frustumLengths{X}[index{X}];\n                    float diffRatio = clamp(diff{X} / frustumLength, 0., 1.) * cascadeBlendFactor{X};\n                    if (index{X} < (SHADOWCSMNUM_CASCADES{X} - 1) && diffRatio < 1.)\n                    {\n                        index{X} += 1;\n                        float nextShadow = 0.;\n                        #if defined(SHADOWPCF{X})\n                            #if defined(SHADOWLOWQUALITY{X})\n                                nextShadow = computeShadowWithCSMPCF1(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n                            #elif defined(SHADOWMEDIUMQUALITY{X})\n                                nextShadow = computeShadowWithCSMPCF3(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], shadowSampler{X}, light{X}.shadowsInfo.yz, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n                            #else\n                                nextShadow = computeShadowWithCSMPCF5(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], shadowSampler{X}, light{X}.shadowsInfo.yz, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n                            #endif\n                        #elif defined(SHADOWPCSS{X})\n                            #if defined(SHADOWLOWQUALITY{X})\n                                nextShadow = computeShadowWithCSMPCSS16(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w, lightSizeUVCorrection{X}[index{X}], depthCorrection{X}[index{X}], penumbraDarkness{X});\n                            #elif defined(SHADOWMEDIUMQUALITY{X})\n                                nextShadow = computeShadowWithCSMPCSS32(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w, lightSizeUVCorrection{X}[index{X}], depthCorrection{X}[index{X}], penumbraDarkness{X});\n                            #else\n                                nextShadow = computeShadowWithCSMPCSS64(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w, lightSizeUVCorrection{X}[index{X}], depthCorrection{X}[index{X}], penumbraDarkness{X});\n                            #endif\n                        #else\n                            nextShadow = computeShadowCSM(float(index{X}), vPositionFromLight{X}[index{X}], vDepthMetric{X}[index{X}], shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n                        #endif\n\n                        shadow = mix(nextShadow, shadow, diffRatio);\n                        #ifdef SHADOWCSMDEBUG{X}\n                            shadowDebug{X} = mix(vec3(nextShadow) * vCascadeColorsMultiplier{X}[index{X}], shadowDebug{X}, diffRatio);\n                        #endif\n                    }\n                #endif\n            }\n        #elif defined(SHADOWCLOSEESM{X})\n            #if defined(SHADOWCUBE{X})\n                shadow = computeShadowWithCloseESMCube(light{X}.vLightData.xyz, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.z, light{X}.depthValues);\n            #else\n                shadow = computeShadowWithCloseESM(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.z, light{X}.shadowsInfo.w);\n            #endif\n        #elif defined(SHADOWESM{X})\n            #if defined(SHADOWCUBE{X})\n                shadow = computeShadowWithESMCube(light{X}.vLightData.xyz, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.z, light{X}.depthValues);\n            #else\n                shadow = computeShadowWithESM(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.z, light{X}.shadowsInfo.w);\n            #endif\n        #elif defined(SHADOWPOISSON{X})\n            #if defined(SHADOWCUBE{X})\n                shadow = computeShadowWithPoissonSamplingCube(light{X}.vLightData.xyz, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.x, light{X}.depthValues);\n            #else\n                shadow = computeShadowWithPoissonSampling(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n            #endif\n        #elif defined(SHADOWPCF{X})\n            #if defined(SHADOWLOWQUALITY{X})\n                shadow = computeShadowWithPCF1(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n            #elif defined(SHADOWMEDIUMQUALITY{X})\n                shadow = computeShadowWithPCF3(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.yz, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n            #else\n                shadow = computeShadowWithPCF5(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.yz, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n            #endif\n        #elif defined(SHADOWPCSS{X})\n            #if defined(SHADOWLOWQUALITY{X})\n                shadow = computeShadowWithPCSS16(vPositionFromLight{X}, vDepthMetric{X}, depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n            #elif defined(SHADOWMEDIUMQUALITY{X})\n                shadow = computeShadowWithPCSS32(vPositionFromLight{X}, vDepthMetric{X}, depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n            #else\n                shadow = computeShadowWithPCSS64(vPositionFromLight{X}, vDepthMetric{X}, depthSampler{X}, shadowSampler{X}, light{X}.shadowsInfo.y, light{X}.shadowsInfo.z, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n            #endif\n        #else\n            #if defined(SHADOWCUBE{X})\n                shadow = computeShadowCube(light{X}.vLightData.xyz, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.depthValues);\n            #else\n                shadow = computeShadow(vPositionFromLight{X}, vDepthMetric{X}, shadowSampler{X}, light{X}.shadowsInfo.x, light{X}.shadowsInfo.w);\n            #endif\n        #endif\n\n        #ifdef SHADOWONLY\n            #ifndef SHADOWINUSE\n                #define SHADOWINUSE\n            #endif\n            globalShadow += shadow;\n            shadowLightCount += 1.0;\n        #endif\n    #else\n        shadow = 1.;\n    #endif\n\n    #ifndef SHADOWONLY\n        #ifdef CUSTOMUSERLIGHTING\n            // Compute and reflect MToon lighting\n            #ifdef SPOTLIGHT{X}\n                lightDirection = computeSpotLightDirection(light{X}.vLightData);\n            #elif defined(HEMILIGHT{X})\n                lightDirection = computeHemisphericLightDirection(light{X}.vLightData, normalW.xyz);\n            #elif defined(POINTLIGHT{X}) || defined(DIRLIGHT{X})\n                lightDirection = computeLightDirection(light{X}.vLightData);\n            #endif\n            mtoonDiffuse = computeMToonDiffuseLighting(viewDirectionW.xyz, normalW.xyz, mainUv, lightDirection, light{X}.vLightDiffuse.rgba, shadow);\n            diffuseBase += mtoonDiffuse.rgb;\n            alpha = min(alpha, mtoonDiffuse.a);\n            #if defined(ALPHATEST) && ALPHATEST\n                alpha = (alpha - alphaCutOff) / max(fwidth(alpha), EPS_COL) + 0.5; // Alpha to Coverage\n                if (alpha < alphaCutOff) {\n                    discard;\n                }\n                alpha = 1.0; // Discarded, otherwise it should be assumed to have full opacity\n            #else\n                if (alpha - 0.0001 < 0.000) { // Slightly improves rendering with layered transparency\n                    discard;\n                }\n            #endif\n        #elif defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X})\n            diffuseBase += lightmapColor.rgb * shadow;\n            #ifdef SPECULARTERM\n                #ifndef LIGHTMAPNOSPECULAR{X}\n                    specularBase += info.specular * shadow * lightmapColor.rgb;\n                #endif\n            #endif\n            #ifdef CLEARCOAT\n                #ifndef LIGHTMAPNOSPECULAR{X}\n                    clearCoatBase += info.clearCoat.rgb * shadow * lightmapColor.rgb;\n                #endif\n            #endif\n            #ifdef SHEEN\n                #ifndef LIGHTMAPNOSPECULAR{X}\n                    sheenBase += info.sheen.rgb * shadow;\n                #endif\n            #endif\n        #else\n            #ifdef SHADOWCSMDEBUG{X}\n                diffuseBase += info.diffuse * shadowDebug{X};\n            #else\n                diffuseBase += info.diffuse * shadow;\n            #endif\n            #ifdef SPECULARTERM\n                specularBase += info.specular * shadow;\n            #endif\n            #ifdef CLEARCOAT\n                clearCoatBase += info.clearCoat.rgb * shadow;\n            #endif\n            #ifdef SHEEN\n                sheenBase += info.sheen.rgb * shadow;\n            #endif\n        #endif\n    #endif\n#endif\n";

/***/ }),

/***/ "./src/shaders/mtoon-fragment-functions.frag":
/*!***************************************************!*\
  !*** ./src/shaders/mtoon-fragment-functions.frag ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "\n/**\n* Compute Directional or Point light direction\n*/\nvec3 computeLightDirection(vec4 lightData) {\n    return normalize(mix(lightData.xyz - vPositionW, -lightData.xyz, lightData.w));\n}\n\n/**\n* Compute Spot Light direction\n*/\nvec3 computeSpotLightDirection(vec4 lightData) {\n    return normalize(lightData.xyz - vPositionW);\n}\n\n/**\n* Compute Hemispheric light direction\n*/\nvec3 computeHemisphericLightDirection(vec4 lightData, vec3 vNormal) {\n    return normalize(lightData.xyz);\n}\n\n/**\n* Compute MToon diffuse lighting\n*/\nvec4 computeMToonDiffuseLighting(vec3 worldView, vec3 worldNormal, vec2 mainUv, vec3 lightDirection, vec4 lightDiffuse, float shadowAttenuation) {\n    float _receiveShadow = receiveShadowRate;\n#ifdef RECEIVE_SHADOW\n    _receiveShadow = _receiveShadow * texture2D(receiveShadowSampler, mainUv).r * vReceiveShadowInfos.y;\n#endif\n\n    float _shadingGrade = 0.0;\n#ifdef SHADING_GRADE\n    _shadingGrade = 1.0 - texture2D(shadingGradeSampler, mainUv).r * vShadingGradeInfos.y;\n#endif\n    _shadingGrade = 1.0 - shadingGradeRate * _shadingGrade;\n\n    // Lighting\n    vec3 _lightColor = lightDiffuse.rgb * step(0.5, length(lightDirection)); // length(lightDir) is zero if directional light is disabled.\n    float _dotNL = dot(lightDirection, worldNormal);\n#ifdef MTOON_FORWARD_ADD\n    float _lightAttenuation = 1.0;\n#else\n    float _lightAttenuation = shadowAttenuation * mix(1.0, shadowAttenuation, _receiveShadow);\n#endif\n\n    // lighting intensity\n    float _lightIntensity = _dotNL;\n    _lightIntensity = _lightIntensity * 0.5 + 0.5; // from [-1, +1] to [0, 1]\n    _lightIntensity = _lightIntensity * _lightAttenuation; // receive shadow\n    _lightIntensity = _lightIntensity * _shadingGrade; // darker\n    _lightIntensity = _lightIntensity * 2.0 - 1.0; // from [0, 1] to [-1, +1]\n    // tooned. mapping from [minIntensityThreshold, maxIntensityThreshold] to [0, 1]\n    float _maxIntensityThreshold = mix(1.0, shadeShift, shadeToony);\n    float _minIntensityThreshold = shadeShift;\n    _lightIntensity = clamp((_lightIntensity - _minIntensityThreshold) / max(EPS_COL, (_maxIntensityThreshold - _minIntensityThreshold)), 0.0, 1.0);\n\n    // Albedo color\n    vec3 _shade = vShadeColor;\n#ifdef SHADE\n    _shade = _shade * texture2D(shadeSampler, mainUv).rgb * vShadeInfos.y;\n#endif\n\n    vec4 _lit = vDiffuseColor;\n#ifdef DIFFUSE\n    _lit = _lit * texture2D(diffuseSampler, mainUv) * vDiffuseInfos.y;\n#endif\n    vec3 _col = mix(_shade.rgb, _lit.rgb, _lightIntensity);\n\n    // Direct Light\n    vec3 _lighting = _lightColor;\n    _lighting = mix(_lighting, vec3(max(EPS_COL, max(_lighting.x, max(_lighting.y, _lighting.z)))), lightColorAttenuation); // color atten\n#ifdef MTOON_FORWARD_ADD\n    _lighting *= 0.5; // darken if additional light\n    _lighting *= min(0, dotNL) + 1.0; // darken dotNL < 0 area by using half lambert\n    _lighting *= shadowAttenuation; // darken if receiving shadow\n#else\n    // base light does not darken.\n#endif\n    _col *= _lighting;\n\n    // Indirect Light\n#ifdef MTOON_FORWARD_ADD\n#else\n    vec3 _toonedGI = vAmbientColor.rgb; // TODO: GI\n    vec3 _indirectLighting = mix(_toonedGI, vAmbientColor.rgb, indirectLightIntensity);\n    _indirectLighting = mix(_indirectLighting, vec3(max(EPS_COL, max(_indirectLighting.x, max(_indirectLighting.y, _indirectLighting.z)))), lightColorAttenuation); // color atten\n    _col += _indirectLighting * _lit.rgb;\n\n    _col = min(_col.rgb, _lit.rgb); // comment out if you want to PBR absolutely.\n#endif\n\n    // parametric rim lighting\n#ifdef MTOON_FORWARD_ADD\n    vec3 _staticRimLighting = vec3(0.0);\n    vec3 _mixedRimLighting = _lighting;\n#else\n    vec3 _staticRimLighting = vec3(1.0);\n    vec3 _mixedRimLighting = _lighting + _indirectLighting;\n#endif\n    vec3 _rimLighting = mix(_staticRimLighting, _mixedRimLighting, rimLightingMix);\n    vec3 _rimColor = vRimColor.rgb;\n#ifdef RIM\n    _rimColor = _rimColor * texture2D(rimSampler, vRimUV + mainUv).rgb * vRimInfos.y;\n#endif\n    vec3 _rim = pow(clamp(1.0 - dot(worldNormal, worldView) + rimLift, 0.0, 1.0), rimFresnelPower) * _rimColor.rgb;\n    _col += mix(_rim * _rimLighting, vec3(0.0), isOutline);\n\n    // additive matcap\n#ifdef MTOON_FORWARD_ADD\n#else\n#ifdef MATCAP\n    vec3 _worldViewUp = normalize(vEyeUp - worldView * dot(worldView, vEyeUp));\n    vec3 _worldViewRight = normalize(cross(worldView, _worldViewUp));\n    vec2 _matCapUv = vec2(dot(_worldViewRight, worldNormal), dot(_worldViewUp, worldNormal)) * 0.5 + 0.5;\n    // uv.y is reversed\n    _matCapUv.y = (1.0 - _matCapUv.y);\n    vec3 _matCapLighting = texture2D(matCapSampler, _matCapUv).rgb * vMatCapInfos.y;\n    _col += mix(_matCapLighting, vec3(0.0), isOutline);\n#endif\n#endif\n\n    // Emission\n#ifdef MTOON_FORWARD_ADD\n#else\n    vec3 _emission = vEmissiveColor.rgb;\n#ifdef EMISSIVE\n    _emission *= texture2D(emissiveSampler, mainUv).rgb * vEmissiveInfos.y;\n#endif\n    _col += mix(_emission, vec3(0.0), isOutline);\n#endif\n\n    float _alpha = 1.0;\n\n#if defined(ALPHABLEND) || defined(ALPHATEST)\n    _alpha = mix(_lit.a, _lit.a * vOutlineColor.a, isOutline);\n#endif\n\n    // outline\n#ifdef MTOON_OUTLINE_COLOR_FIXED\n    _col = mix(_col, vOutlineColor.rgb, isOutline);\n#elif defined(MTOON_OUTLINE_COLOR_MIXED)\n    _col = mix(_col, vOutlineColor.rgb * mix(vec3(1.0), _col, outlineLightingMix), isOutline);\n#else\n#endif\n\n    // debug\n#ifdef MTOON_DEBUG_NORMAL\n    #ifdef MTOON_FORWARD_ADD\n        return vec4(0.0);\n    #else\n        return vec4(worldNormal * 0.5 + 0.5, _lit.a);\n    #endif\n#elif defined(MTOON_DEBUG_LITSHADERATE)\n    #ifdef MTOON_FORWARD_ADD\n        return vec4(0.0);\n    #else\n        return vec4(_lightIntensity, _lit.a);\n    #endif\n#endif\n\n    return vec4(_col, _alpha);\n}\n";

/***/ }),

/***/ "./src/shaders/mtoon.frag":
/*!********************************!*\
  !*** ./src/shaders/mtoon.frag ***!
  \********************************/
/***/ ((module) => {

module.exports = "#include<__decl__mtoonFragment>\n\n#extension GL_OES_standard_derivatives : enable\n\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n\n#define CUSTOM_FRAGMENT_BEGIN\n\n#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\n\n// Constants\n#define RECIPROCAL_PI2 0.15915494\n#define PI_2 6.28318530718\n#define EPS_COL 0.00001\n\n// Input\nvarying vec3 vPositionW;\n\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR)\nvarying vec4 vColor;\n#endif\n\n#include<mainUVVaryingDeclaration>[1..7]\n\n// Helper functions\n#include<helperFunctions>\n\n// Lights\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n\n// Samplers\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse,_SAMPLERNAME_,diffuse)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_SAMPLERNAME_,emissive)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,SHADE,_VARYINGNAME_,Shade,_SAMPLERNAME_,shade)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,RECEIVE_SHADOW,_VARYINGNAME_,ReceiveShadow,_SAMPLERNAME_,receiveShadow)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,SHADING_GRADE,_VARYINGNAME_,ShadingGrade,_SAMPLERNAME_,shadingGrade)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,RIM,_VARYINGNAME_,Rim,_SAMPLERNAME_,rim)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,MATCAP,_VARYINGNAME_,MatCap,_SAMPLERNAME_,matCap)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,OUTLINE_WIDTH,_VARYINGNAME_,OutlineWidth,_SAMPLERNAME_,outlineWidth)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,UV_ANIMATION_MASK,_VARYINGNAME_,UvAnimationMask,_SAMPLERNAME_,uvAnimationMask)\n\n#include<mtoonFragmentFunctions>\n\n// # ifdef REFRACTION\n\n// # ifdef REFRACTIONMAP_3D\n// uniform samplerCube refractionCubeSampler;\n// # else\n// uniform sampler2D refraction2DSampler;\n// # endif\n\n// # endif\n\n// # if defined(SPECULARTERM)\n//     # include<samplerFragmentDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_SAMPLERNAME_,specular)\n// # endif\n\n// // Fresnel\n// # include<fresnelFunction>\n\n// // Reflection\n// # ifdef REFLECTION\n// # ifdef REFLECTIONMAP_3D\n// uniform samplerCube reflectionCubeSampler;\n// # else\n// uniform sampler2D reflection2DSampler;\n// # endif\n\n// # ifdef REFLECTIONMAP_SKYBOX\n// varying vec3 vPositionUVW;\n// # else\n// # if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)\n// varying vec3 vDirectionW;\n// # endif\n\n// # endif\n\n// # include<reflectionFunction>\n\n// # endif\n\n#include<imageProcessingDeclaration>\n\n#include<imageProcessingFunctions>\n\n#include<bumpFragmentMainFunctions>\n#include<bumpFragmentFunctions>\n#include<clipPlaneFragmentDeclaration>\n#include<logDepthDeclaration>\n#include<fogFragmentDeclaration>\n\n#define CUSTOM_FRAGMENT_DEFINITIONS\n\nvoid main(void) {\n#ifdef MTOON_CLIP_IF_OUTLINE_IS_NONE\n    #ifdef MTOON_OUTLINE_WIDTH_WORLD\n    #elif defined(MTOON_OUTLINE_WIDTH_SCREEN)\n    #else\n        discard;\n    #endif\n#endif\n\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n\n#include<oitFragment>\n\n#include<clipPlaneFragment>\n\n    vec3 viewDirectionW = normalize(vEyePosition.xyz - vPositionW);\n\n    // Base color\n    vec4 baseColor = vec4(1., 1., 1., 1.);\n    vec3 diffuseColor = vec3(1., 1., 1.);\n\n    // Alpha\n    float alpha = 1.0;\n\n    // Bump\n#ifdef NORMAL\n    vec3 normalW = normalize(vNormalW);\n#else\n    vec3 normalW = normalize(-cross(dFdx(vPositionW), dFdy(vPositionW)));\n#endif\n\n#include<depthPrePass>\n\n    // Ambient color\n    vec3 baseAmbientColor = vec3(1., 1., 1.);\n    float glossiness = 0.;\n\n    // Lighting\n    vec3 diffuseBase = vec3(0., 0., 0.);\n    lightingInfo info;\n    float shadow = 1.;\n    vec3 lightDirection = vec3(0.0, 1.0, 0.0);\n    vec4 mtoonDiffuse = vec4(0.0, 0.0, 0.0, 1.0);\n\n    // MToon UV\n    // All textures will use diffuse(_MainTex) UV\n    vec2 mainUv = vec2(0.0);\n#ifdef DIFFUSE\n    mainUv += vDiffuseUV;\n#elif defined(MAINUV1)\n    mainUv += vMainUV1;\n#elif defined(MAINUV2)\n    mainUv += vMainUV2;\n#endif\n\n    // uv anim\n    float uvAnim = time.y;\n#ifdef UV_ANIMATION_MASK\n    uvAnim *= texture2D(uvAnimationMaskSampler, mainUv).r;\n#endif\n    // translate uv in bottom-left origin coordinates.\n    // uv is reversed\n    mainUv += vec2(-uvAnimationScrollX, -uvAnimationScrollY) * uvAnim;\n    // rotate uv counter-clockwise around (0.5, 0.5) in bottom-left origin coordinates.\n    float rotateRad = uvAnimationRotation * PI_2 * uvAnim;\n    vec2 rotatePivot = vec2(0.5, 0.5);\n    mainUv = mat2(cos(rotateRad), -sin(rotateRad), sin(rotateRad), cos(rotateRad)) * (mainUv - rotatePivot) + rotatePivot;\n\n#ifdef FLIP_U\n    mainUv.x = 1.0 - mainUv.x;\n#endif\n#ifdef FLIP_V\n    mainUv.y = 1.0 - mainUv.y;\n#endif\n\n#include<mtoonBumpFragment>\n\n#ifdef TWOSIDEDLIGHTING\n    normalW = gl_FrontFacing ? normalW : -normalW;\n#endif\n\n// include customized lightFragment\n#include<mtoonLightFragment>[0..maxSimultaneousLights]\n\n    vec3 finalDiffuse = clamp(diffuseBase, 0.0, 1.0) * baseColor.rgb;\n\n    // Composition\n    vec4 color = vec4(finalDiffuse, clamp(alpha, 0.0, 1.0));\n\n    color.rgb = max(color.rgb, 0.);\n#include<logDepthFragment>\n#include<fogFragment>\n\n// Apply image processing if relevant. As this applies in linear space,\n// We first move from gamma to linear.\n#ifdef IMAGEPROCESSINGPOSTPROCESS\n    color.rgb = toLinearSpace(color.rgb);\n#else\n    #ifdef IMAGEPROCESSING\n        // FIXME: support image processing\n        // color.rgb = toLinearSpace(color.rgb);\n        // color = applyImageProcessing(color);\n    #endif\n#endif\n\n    color.a *= visibility;\n\n#ifdef PREMULTIPLYALPHA\n    // Convert to associative (premultiplied) format if needed.\n    color.rgb *= color.a;\n#endif\n\n#ifdef PREPASS\n    float writeGeometryInfo = color.a > 0.4 ? 1.0 : 0.0;\n\n    gl_FragData[0] = color; // We can't split irradiance on std material\n\n    #ifdef PREPASS_POSITION\n    gl_FragData[PREPASS_POSITION_INDEX] = vec4(vPositionW, writeGeometryInfo);\n    #endif\n\n    #ifdef PREPASS_VELOCITY\n    vec2 a = (vCurrentPosition.xy / vCurrentPosition.w) * 0.5 + 0.5;\n    vec2 b = (vPreviousPosition.xy / vPreviousPosition.w) * 0.5 + 0.5;\n\n    vec2 velocity = abs(a - b);\n    velocity = vec2(pow(velocity.x, 1.0 / 3.0), pow(velocity.y, 1.0 / 3.0)) * sign(a - b) * 0.5 + 0.5;\n\n    gl_FragData[PREPASS_VELOCITY_INDEX] = vec4(velocity, 0.0, writeGeometryInfo);\n    #endif\n\n    #ifdef PREPASS_IRRADIANCE\n        gl_FragData[PREPASS_IRRADIANCE_INDEX] = vec4(0.0, 0.0, 0.0, writeGeometryInfo); //  We can't split irradiance on std material\n    #endif\n\n    #ifdef PREPASS_DEPTH\n        gl_FragData[PREPASS_DEPTH_INDEX] = vec4(vViewPos.z, 0.0, 0.0, writeGeometryInfo); // Linear depth\n    #endif\n\n    #ifdef PREPASS_NORMAL\n        gl_FragData[PREPASS_NORMAL_INDEX] = vec4((view * vec4(normalW, 0.0)).rgb, writeGeometryInfo); // Normal\n    #endif\n\n    #ifdef PREPASS_ALBEDO_SQRT\n        gl_FragData[PREPASS_ALBEDO_SQRT_INDEX] = vec4(0.0, 0.0, 0.0, writeGeometryInfo); // We can't split albedo on std material\n    #endif\n    #ifdef PREPASS_REFLECTIVITY\n        #if defined(SPECULAR)\n            gl_FragData[PREPASS_REFLECTIVITY_INDEX] = vec4(specularMapColor.rgb, specularMapColor.a * writeGeometryInfo);\n        #else\n            gl_FragData[PREPASS_REFLECTIVITY_INDEX] = vec4(0.0, 0.0, 0.0, writeGeometryInfo);\n        #endif\n    #endif\n#endif\n\n#if !defined(PREPASS) || defined(WEBGL2)\n    gl_FragColor = color;\n#endif\n\n#if ORDER_INDEPENDENT_TRANSPARENCY\n    if (fragDepth == nearestDepth) {\n        frontColor.rgb += color.rgb * color.a * alphaMultiplier;\n        frontColor.a = 1.0 - alphaMultiplier * (1.0 - color.a);\n    } else {\n        backColor += color;\n    }\n#endif\n\n#define CUSTOM_FRAGMENT_MAIN_END\n\n}\n";

/***/ }),

/***/ "./src/shaders/mtoon.vert":
/*!********************************!*\
  !*** ./src/shaders/mtoon.vert ***!
  \********************************/
/***/ ((module) => {

module.exports = "// it is based on default.vertex.fx\n// This include is special, it will be replaced to UboDeclaration(WebGL2) or VertexDeclaration(WebGL1).\n// @see effect.ts\n#include<__decl__mtoonVertex>\n\n// Attributes\n\n#define CUSTOM_VERTEX_BEGIN\n\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef TANGENT\nattribute vec4 tangent;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#include<uvAttributeDeclaration>[2..7]\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n\n#include<helperFunctions>\n\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n\n// Uniforms\n#include<instancesDeclaration>\n#include<prePassVertexDeclaration>\n\n#include<mainUVVaryingDeclaration>[1..7]\n\n#include<samplerVertexDeclaration>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse)\n// # include<samplerVertexDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail)\n// # include<samplerVertexDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient)\n// # include<samplerVertexDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity)\n#include<samplerVertexDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive)\n// # include<samplerVertexDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap)\n// # if defined(SPECULARTERM)\n// # include<samplerVertexDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular)\n// # endif\n#include<samplerVertexDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump)\n#include<samplerVertexDeclaration>(_DEFINENAME_,SHADE,_VARYINGNAME_,Shade)\n#include<samplerVertexDeclaration>(_DEFINENAME_,RECEIVE_SHADOW,_VARYINGNAME_,ReceiveShadow)\n#include<samplerVertexDeclaration>(_DEFINENAME_,SHADING_GRADE,_VARYINGNAME_,ShadingGrade)\n#include<samplerVertexDeclaration>(_DEFINENAME_,RIM,_VARYINGNAME_,Rim)\n#include<samplerVertexDeclaration>(_DEFINENAME_,MATCAP,_VARYINGNAME_,MatCap)\n#include<samplerVertexDeclaration>(_DEFINENAME_,OUTLINE_WIDTH,_VARYINGNAME_,OutlineWidth)\n#include<samplerVertexDeclaration>(_DEFINENAME_,UV_ANIMATION_MASK,_VARYINGNAME_,UvAnimationMask)\n\n// Additional Uniforms\n#ifdef OUTLINE_WIDTH\n    uniform sampler2D outlineWidthSampler;\n#endif\n\n// Output\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR)\nvarying vec4 vColor;\n#endif\n\n#include<bumpVertexDeclaration>\n\n#include<clipPlaneVertexDeclaration>\n\n#include<fogVertexDeclaration>\n#include<__decl__lightVxFragment>[0..maxSimultaneousLights]\n\n#include<morphTargetsVertexGlobalDeclaration>\n#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]\n\n// # ifdef REFLECTIONMAP_SKYBOX\n// varying vec3 vPositionUVW;\n// # endif\n\n// # if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)\n// varying vec3 vDirectionW;\n// # endif\n\n#include<logDepthDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n\nvoid main(void) {\n\n    #define CUSTOM_VERTEX_MAIN_BEGIN\n\n    vec3 positionUpdated = position;\n#ifdef NORMAL\n    vec3 normalUpdated = normal;\n#endif\n#ifdef TANGENT\n    vec4 tangentUpdated = tangent;\n#endif\n#ifdef UV1\n    vec2 uvUpdated = uv;\n#endif\n\n#include<morphTargetsVertexGlobal>\n#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]\n\n// # ifdef REFLECTIONMAP_SKYBOX\n//     vPositionUVW = positionUpdated;\n// # endif\n\n#define CUSTOM_VERTEX_UPDATE_POSITION\n\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n\n#include<instancesVertex>\n\n#if defined(PREPASS) && defined(PREPASS_VELOCITY) && !defined(BONES_VELOCITY_ENABLED)\n    // Compute velocity before bones computation\n    vCurrentPosition = viewProjection * finalWorld * vec4(positionUpdated, 1.0);\n    vPreviousPosition = previousViewProjection * finalPreviousWorld * vec4(positionUpdated, 1.0);\n#endif\n\n#include<bonesVertex>\n#include<bakedVertexAnimation>\n\n    // Texture coordinates\n#ifndef UV1\n    vec2 uvUpdated = vec2(0., 0.);\n#endif\n#ifdef MAINUV1\n    vMainUV1 = uvUpdated;\n#endif\n#include<uvVariableDeclaration>[2..7]\n\n    float outlineTex = 1.0;\n    if (isOutline == 1.0) {\n#ifdef OUTLINE_WIDTH\n    #if OUTLINE_WIDTHDIRECTUV == 0\n        if (vOutlineWidthInfos.x == 0.)\n        {\n            vOutlineWidthUV = vec2(outlineWidthMatrix * vec4(uvUpdated, 1.0, 0.0));\n        }\n        #ifdef UV2\n        else if (vOutlineWidthInfos.x == 1.)\n        {\n            vOutlineWidthUV = vec2(outlineWidthMatrix * vec4(uv2, 1.0, 0.0));\n        }\n        #endif\n        #ifdef UV3\n        else if (vOutlineWidthInfos.x == 2.)\n        {\n            vOutlineWidthUV = vec2(outlineWidthMatrix * vec4(uv3, 1.0, 0.0));\n        }\n        #endif\n        #ifdef UV4\n        else if (vOutlineWidthInfos.x == 3.)\n        {\n            vOutlineWidthUV = vec2(outlineWidthMatrix * vec4(uv4, 1.0, 0.0));\n        }\n        #endif\n        #ifdef UV5\n        else if (vOutlineWidthInfos.x == 4.)\n        {\n            vOutlineWidthUV = vec2(outlineWidthMatrix * vec4(uv5, 1.0, 0.0));\n        }\n        #endif\n        #ifdef UV6\n        else if (vOutlineWidthInfos.x == 5.)\n        {\n            vOutlineWidthUV = vec2(outlineWidthMatrix * vec4(uv6, 1.0, 0.0));\n        }\n        #endif\n    #elif defined(MAINUV1)\n        vec2 vOutlineWidthUV = vMainUV1;\n    #elif defined(MAINUV2)\n        vec2 vOutlineWidthUV = vMainUV2;\n    #else\n        vec2 vOutlineWidthUV = vec2(0., 0.);\n    #endif\n        outlineTex = texture2D(outlineWidthSampler, vOutlineWidthUV).r * vOutlineWidthInfos.y;\n#endif\n\n#if defined(MTOON_OUTLINE_WIDTH_WORLD) && defined(NORMAL)\n        // move slightly world normal\n        vec3 outlineOffset = 0.01 * outlineWidth * outlineTex * length(transposeMat3(inverseMat3(mat3(finalWorld))) * normalUpdated) * normalUpdated;\n        positionUpdated += outlineOffset;\n#endif\n    } // End isOutline == 1.0\n\n    vec4 worldPos = finalWorld * vec4(positionUpdated, 1.0);\n\n#ifdef NORMAL\n    mat3 normalWorld = mat3(finalWorld);\n\n    #if defined(INSTANCES) && defined(THIN_INSTANCES)\n        vNormalW = normalUpdated / vec3(dot(normalWorld[0], normalWorld[0]), dot(normalWorld[1], normalWorld[1]), dot(normalWorld[2], normalWorld[2]));\n        vNormalW = normalize(normalWorld * vNormalW);\n    #else\n        #ifdef NONUNIFORMSCALING\n            normalWorld = transposeMat3(inverseMat3(normalWorld));\n        #endif\n\n        vNormalW = normalize(normalWorld * normalUpdated);\n    #endif\n#endif\n\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\n\n#ifdef MULTIVIEW\n    if (gl_ViewID_OVR == 0u) {\n        gl_Position = viewProjection * worldPos;\n    } else {\n        gl_Position = viewProjectionR * worldPos;\n    }\n#else\n    gl_Position = viewProjection * worldPos;\n#endif\n\n    if (isOutline == 1.0) {\n#if defined(MTOON_OUTLINE_WIDTH_SCREEN) && defined(NORMAL)\n        vec3 viewNormal = transposeMat3(inverseMat3(mat3(view) * mat3(finalWorld))) * normalUpdated;\n        vec3 clipNormal = mat3(projection) * viewNormal;\n        vec2 projectedNormal = normalize(clipNormal.xy);\n        projectedNormal *= min(gl_Position.w, outlineScaledMaxDistance);\n        projectedNormal.x /= aspect; // aspect in original mtoon is y/x. aspect in babylon is x/y.\n        gl_Position.xy += 0.01 * outlineWidth * outlineTex * projectedNormal * clamp(1.0 - abs(normalize(viewNormal).z), 0.0, 1.0); // ignore offset when normal toward camera\n#endif\n\n        gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic from three-vrm\n    }\n\n    worldPos = finalWorld * vec4(positionUpdated, 1.0);\n    vPositionW = vec3(worldPos);\n\n#include<prePassVertex>\n\n// # if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)\n//     vDirectionW = normalize(vec3(finalWorld * vec4(positionUpdated, 0.0)));\n// # endif\n\n    #include<samplerVertexImplementation>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse,_MATRIXNAME_,diffuse,_INFONAME_,DiffuseInfos.x)\n    // # include<samplerVertexImplementation>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_MATRIXNAME_,detail,_INFONAME_,DetailInfos.x)\n    // # include<samplerVertexImplementation>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_MATRIXNAME_,ambient,_INFONAME_,AmbientInfos.x)\n    // # include<samplerVertexImplementation>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_MATRIXNAME_,opacity,_INFONAME_,OpacityInfos.x)\n    #include<samplerVertexImplementation>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_MATRIXNAME_,emissive,_INFONAME_,EmissiveInfos.x)\n    // # include<samplerVertexImplementation>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_MATRIXNAME_,lightmap,_INFONAME_,LightmapInfos.x)\n    // # if defined(SPECULARTERM)\n    // # include<samplerVertexImplementation>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_MATRIXNAME_,specular,_INFONAME_,SpecularInfos.x)\n    // # endif\n    #include<samplerVertexImplementation>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_MATRIXNAME_,bump,_INFONAME_,BumpInfos.x)\n    #include<samplerVertexImplementation>(_DEFINENAME_,SHADE,_VARYINGNAME_,Shade,_MATRIXNAME_,shade,_INFONAME_,ShadeInfos.x)\n    #include<samplerVertexImplementation>(_DEFINENAME_,RECEIVE_SHADOW,_VARYINGNAME_,ReceiveShadow,_MATRIXNAME_,receiveShadow,_INFONAME_,ReceiveShadowInfos.x)\n    #include<samplerVertexImplementation>(_DEFINENAME_,SHADING_GRADE,_VARYINGNAME_,ShadingGrade,_MATRIXNAME_,shadingGrade,_INFONAME_,ShadingGradeInfos.x)\n    #include<samplerVertexImplementation>(_DEFINENAME_,RIM,_VARYINGNAME_,Rim,_MATRIXNAME_,rim,_INFONAME_,RimInfos.x)\n    #include<samplerVertexImplementation>(_DEFINENAME_,MATCAP,_VARYINGNAME_,MatCap,_MATRIXNAME_,matCap,_INFONAME_,MatCapInfos.x)\n    #include<samplerVertexImplementation>(_DEFINENAME_,UV_ANIMATION_MASK,_VARYINGNAME_,UvAnimationMask,_MATRIXNAME_,uvAnimationMask,_INFONAME_,uvAnimationMaskInfos.x)\n\n#include<bumpVertex>\n#include<clipPlaneVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n\n#ifdef VERTEXCOLOR\n    vColor = color;\n#elif defined(INSTANCESCOLOR) && INSTANCESCOLOR\n    vColor = instanceColor;\n#endif\n\n#include<pointCloudVertex>\n#include<logDepthVertex>\n\n#define CUSTOM_VERTEX_MAIN_END\n\n}\n";

/***/ }),

/***/ "./src/shaders/ubo-declaration.vert":
/*!******************************************!*\
  !*** ./src/shaders/ubo-declaration.vert ***!
  \******************************************/
/***/ ((module) => {

module.exports = "// it will be replaced to UboDeclaration(WebGL2) or VertexDeclaration(WebGL1).\n\nlayout(std140, column_major) uniform;\n\nuniform Material\n{\n    // Color & Texture\n    vec4 vDiffuseColor;\n    vec2 vDiffuseInfos;\n    mat4 diffuseMatrix;\n    vec4 vEmissiveColor;\n    vec2 vEmissiveInfos;\n    mat4 emissiveMatrix;\n    vec3 vBumpInfos;\n    mat4 bumpMatrix;\n    vec3 vShadeColor;\n    vec2 vShadeInfos;\n    mat4 shadeMatrix;\n    vec2 vReceiveShadowInfos;\n    mat4 receiveShadowMatrix;\n    vec2 vShadingGradeInfos;\n    mat4 shadingGradeMatrix;\n    vec3 vRimColor;\n    vec2 vRimInfos;\n    mat4 rimMatrix;\n    vec2 vMatCapInfos;\n    mat4 matCapMatrix;\n    vec4 vOutlineColor;\n    vec2 vOutlineWidthInfos;\n    mat4 outlineWidthMatrix;\n    vec2 vUvAnimationMaskInfos;\n    mat4 uvAnimationMaskMatrix;\n\n    // babylon specific\n    vec2 vTangentSpaceParams;\n    float pointSize;\n\n    // MToon params\n    float shadingGradeRate;\n    float receiveShadowRate;\n    float shadeShift;\n    float shadeToony;\n    float lightColorAttenuation;\n    float indirectLightIntensity;\n    float rimLightingMix;\n    float rimFresnelPower;\n    float rimLift;\n    float outlineWidth;\n    float outlineScaledMaxDistance;\n    float outlineLightingMix;\n    float uvAnimationScrollX;\n    float uvAnimationScrollY;\n    float uvAnimationRotation;\n\n    vec3 vEyeUp;\n    float alphaCutOff;\n    vec3 vAmbientColor;\n    float aspect;\n    float isOutline;\n    vec4 time;\n};\n\n// babylon specific\n#include<sceneUboDeclaration>\n#include<meshUboDeclaration>\n";

/***/ }),

/***/ "./src/shaders/vertex-declaration.vert":
/*!*********************************************!*\
  !*** ./src/shaders/vertex-declaration.vert ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "// Uniforms\nuniform mat4 viewProjection;\nuniform mat4 view;\nuniform mat4 projection;\nuniform float outlineWidth;\nuniform float outlineScaledMaxDistance;\nuniform float outlineLightingMix;\nuniform float isOutline;\nuniform float aspect;\n\n#ifdef DIFFUSE\nuniform mat4 diffuseMatrix;\nuniform vec2 vDiffuseInfos;\n#endif\n\n#ifdef EMISSIVE\nuniform vec2 vEmissiveInfos;\nuniform mat4 emissiveMatrix;\n#endif\n\n#ifdef BUMP\nuniform vec3 vBumpInfos;\nuniform mat4 bumpMatrix;\n#endif\n\n#ifdef SHADE\nuniform vec2 vShadeInfos;\nuniform mat4 shadeMatrix;\n#endif\n\n#ifdef RECEIVE_SHADOW\nuniform vec2 vReceiveShadowInfos;\nuniform mat4 receiveShadowMatrix;\n#endif\n\n#ifdef SHADING_GRADE\nuniform vec2 vShadingGradeInfos;\nuniform mat4 shadingGradeMatrix;\n#endif\n\n#ifdef RIM\nuniform vec2 vRimInfos;\nuniform mat4 rimMatrix;\n#endif\n\n#ifdef MATCAP\nuniform vec2 vMatCapInfos;\nuniform mat4 matCapMatrix;\n#endif\n\n#ifdef OUTLINE_WIDTH\nuniform vec2 vOutlineWidthInfos;\nuniform mat4 outlineWidthMatrix;\n#endif\n\n#ifdef UV_ANIMATION_MASK\nuniform vec2 vUvAnimationMaskInfos;\nuniform mat4 uvAnimationMaskMatrix;\n#endif\n\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\n";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbabylon_mtoon_material"] = self["webpackChunkbabylon_mtoon_material"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors~main"], () => (__webpack_require__("./src/test/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=main.js.map