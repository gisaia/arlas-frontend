/** Structure  */
export interface PaintColor {
  property: string;
  type: string;
  stops: Array<Array<string>>;
}

export type PaintValue = Array<string | Array<string> | number> | PaintColor | string | number;

/** Generic structure describing the paint of a Layer */
export interface ArlasPaint { [key: string]: PaintValue; }

/** Structure defining the Stroke of a Layer */
export interface FillStroke {
  width?: PaintValue;
  opacity?: number;
  color?: PaintValue;
}

/** Metadata of a layer containing info about
 * - the collection
 * - whether it has an interaction with the resultlist (scrollable)
 * - geomType for circle heatmap.
 */
export interface LayerMetadata {
  /** Layer's collection */
  collection?: string;
  stroke?: FillStroke;
  /** Whether the layer interacts with the resultlist */
  isScrollableLayer?: boolean;
  hiddenProps?: MetadataHiddenProps;
  showLegend?: boolean;
  /** For an aggregated layer, whether the cell is h3 or geotile/geohash */
  cellShape?: 'hexagonal' | 'square';
}

/** Properties not directly used by the cartographic client */
export interface MetadataHiddenProps {
  geomType?: string;
}
