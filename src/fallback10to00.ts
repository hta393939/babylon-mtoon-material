
/**
 * https://github.com/vrm-c/vrm-specification/blob/master/specification/VRMC_materials_mtoon-1.0/schema/VRMC_materials_mtoon.schema.json

  for each material
  // glTF-2.0
  "materials": [
  "extensions": {
    "VRMC_materials_mtoon": {}
  }
  ],

"transparentWithZWrite"
"renderQueueOffsetNumber"
"shadeColorFactor"
"shadeMultiplyTexture"
"shadingShiftFactor"
"shadingShiftTexture"
"shadingToonyFactor"
"giEqualizationFactor"
"matcapFactor"
"matcapTexture"
"parametricRimColorFactor"
"rimMultiplyTexture"
"rimLightingMixFactor"
"parametricRimFresnelPowerFactor"
"parametricRimLiftFactor"
"outlineWidthMode"
"outlineWidthFactor"
"outlineWidthMultiplyTexture"
"outlineColorFactor"
"outlineLightingMixFactor"
"uvAnimationMaskTexture"
"uvAnimationScrollXSpeedFactor"
"uvAnimationScrollYSpeedFactor"


https://zenn.dev/toshikun/scraps/cbb69521efbccb

material00

"_AlphaMode" not mtoon
"_TransparentWithZWrite"
"_Cutoff" not mtoon
"_RenderQueueOffset"
"_DoubleSided" not mtoon

"_Color" pbr
"_MainTex" pbr
"_ShadeColor"
"_ShadeTex"
"_BumpMap" N
"_BumpScale" N
"_ShadingShiftFactor"
"_ShadingShiftTexScale"
"_ShadingShiftTexScale"
"_ShadingToonyFactor"


"_GiEqualization"

"_EmissionColor" E4
"_EmissionMap" E


"_MatcapColor" 4
"_MatcapTex"
"_RimColor" 4
"_RimFresnelPower"
"_RimLift"
"_RimTex"
"_RimLightingMix"

"_OutlineWidthMode"
"_OutlineWidth"
"_OutlineWidthTex"
"_OutlineColor"
"_OutlineLightingMix"

"_UvAnimMaskTex"
"_UvAnimScrollXSpeed"
"_UvAnimScrollYSpeed"
"_UvAnimRotationSpeed"


"_M_CullMode"


https://vrm.dev/univrm1/migrate_vrm0/feature/


ex. read _AlphaMode etc. to babylonjs
https://github.com/virtual-cast/babylon-vrm-loader/blob/master/src/material-value-binding-merger.ts
 */

import { Scene } from '@babylonjs/core/scene';
import { MToonMaterial } from './mtoon-material';

/**
 * vrm10 material
 * @see https://github.com/vrm-c/vrm-specification/blob/master/specification/VRMC_materials_mtoon-1.0/schema/VRMC_materials_mtoon.schema.json
 */
interface MToonMaterial10 {
  "specVersion": string;
  "transparentWithZWrite"?: boolean;
  /**
   * integer -9 - 0 - +9
   */
  "renderQueueOffsetNumber"?: number;
  "shadeColorFactor"?: [number, number, number];
  /**
   * glTF texture index
   */
  "shadeMultiplyTexture"?: number;
  "shadingShiftFactor"?: number;
  /**
   * glTF texture index
   */
  "shadingShiftTexture"?: number;
  "shadingToonyFactor"?: number;
  "giEqualizationFactor"?: number;
  "matcapFactor"?: [number, number, number];
  /**
   * glTF texture index
   */
  "matcapTexture"?: number;
  "parametricRimColorFactor"?: [number, number, number];
  /**
   * glTF texture index
   */
  "rimMultiplyTexture"?: number;
  "rimLightingMixFactor"?: number;
  "parametricRimFresnelPowerFactor"?: number;
  "parametricRimLiftFactor"?: number;
  "outlineWidthMode"?: 'none' | 'worldCoordinates' | 'screenCoordinates';
  "outlineWidthFactor"?: number;
  /**
   * glTF texture index
   */
  "outlineWidthMultiplyTexture"?: number;
  "outlineColorFactor"?: [number, number, number];
  "outlineLightingMixFactor"?: number;
  /**
   * glTF texture index
   */
  "uvAnimationMaskTexture"?: number;
  "uvAnimationScrollXSpeedFactor"?: number;
  "uvAnimationScrollYSpeedFactor"?: number;
  "uvAnimationRotationSpeedFactor"?: number;
}

export class MaterialFallbacker {
  /**
   * Not implemented
   * @param m10
   * @param scene
   * @returns
   */
  static Convert10to00(m10: MToonMaterial10, scene: Scene) {
    const source = { name: '' };
    const rootUrl = '';
    const material = MToonMaterial.Parse(
      source,
      scene,
      rootUrl,
    );
    /**
     * Outer info from material00
     */
    const info = {
    };
    return {
      material,
      info,
    };
  }
}

