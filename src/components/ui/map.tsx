import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

// Delivery data - showing states where Organix Fresh Greens delivers
// 'delivering' = currently delivering, 'coming_soon' = expansion planned, 'not_delivering' = no plans yet
const deliveryData = {
  Jharkhand: "delivering",
  Bihar: "delivering",
  "West Bengal": "delivering",
  Odisha: "delivering",
  // Coming soon states
  Maharashtra: "coming_soon",
  Orissa: "coming_soon",
  Delhi: "coming_soon",
  Chhattisgarh: "coming_soon",
  "Tamil Nadu": "coming_soon",
  "Uttar Pradesh": "coming_soon",
  "Madhya Pradesh": "coming_soon",
  Punjab: "coming_soon",
  Haryana: "coming_soon",
  // Add more states as needed
};

// India GeoJSON URL - you can host this locally or use a CDN
const INDIA_GEOJSON_URL =
  "https://raw.githubusercontent.com/geohacker/india/master/state/india_state.geojson";

const IndiaStatesMap: React.FC<{
  deliveryStates?: { [key: string]: string };
  onStateClick?: ((stateName: string) => void) | null;
  showTooltip?: boolean;
  colorScheme?: {
    delivering: string;
    comingSoon: string;
    notDelivering: string;
    hover: string;
  };
}> = ({
  deliveryStates = deliveryData,
  onStateClick = null,
  showTooltip = true,
  colorScheme = {
    delivering: "#22C55E", // Bright green for states with delivery
    comingSoon: "#9CA3AF", // Grey for coming soon states (default)
    notDelivering: "#9CA3AF", // Grey for not delivering states (default)
    hover: "#16A34A", // Darker green for hover state
  },
}) => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (geo: any, event: React.MouseEvent) => {
    setHoveredState(geo.properties.NAME_1);
    if (showTooltip) {
      setTooltipPosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseLeave = () => {
    setHoveredState(null);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (showTooltip && hoveredState) {
      setTooltipPosition({ x: event.clientX, y: event.clientY });
    }
  };

  const getStateColor = (stateName: string) => {
    if (hoveredState === stateName) {
      // Return appropriate hover color based on state status
      if (deliveryStates.hasOwnProperty(stateName)) {
        const status = (deliveryStates as { [key: string]: string })[stateName];
        if (status === "delivering") return "#16A34A"; // Dark green hover
        if (status === "coming_soon") return "#EAB308"; // Yellow hover
        if (status === "not_delivering") return "#F97316"; // Reddish-orange hover
      }
      return "#F97316"; // Default to reddish-orange hover for unspecified states
    }

    if (deliveryStates.hasOwnProperty(stateName)) {
      const status = (deliveryStates as { [key: string]: string })[stateName];
      if (status === "delivering") return colorScheme.delivering;
      if (status === "coming_soon") return colorScheme.comingSoon;
      if (status === "not_delivering") return colorScheme.notDelivering;
    }

    return "#9CA3AF"; // Grey for all unspecified states
  };

  const getDeliveryStatus = (stateName: string) => {
    if (deliveryStates.hasOwnProperty(stateName)) {
      const status = (deliveryStates as { [key: string]: string })[stateName];
      if (status === "delivering") return "🚚 Delivery Available";
      if (status === "coming_soon") return "⌛️ Coming Soon";
      if (status === "not_delivering") return "❌ Not Available Yet";
    }
    return "❌ Not Available Yet";
  };

  return (
    <div
      className="india-states-map"
      style={{ position: "relative", width: "100%", height: "600px" }}
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [82, 22],
          scale: 1300,
        }}
        style={{ width: "100%", height: "100%" }}
        onMouseMove={handleMouseMove}
      >
        <Geographies geography={INDIA_GEOJSON_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const stateName = geo.properties.NAME_1;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={(event) => handleMouseEnter(geo, event)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => onStateClick && onStateClick(stateName)}
                  style={{
                    default: {
                      fill: getStateColor(stateName),
                      stroke: "#FFFFFF",
                      strokeWidth: 1,
                      outline: "none",
                      transition: "all 0.3s ease",
                    },
                    hover: {
                      fill: getStateColor(stateName), // Use the hover color from getStateColor
                      stroke: "#FFFFFF",
                      strokeWidth: 2,
                      outline: "none",
                      cursor: "pointer",
                    },
                    pressed: {
                      fill: getStateColor(stateName),
                      stroke: "#FFFFFF",
                      strokeWidth: 2,
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {/* Tooltip */}
      {showTooltip && hoveredState && (
        <div
          style={{
            position: "fixed",
            left: tooltipPosition.x + 10,
            top: tooltipPosition.y - 10,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "white",
            padding: "8px 12px",
            borderRadius: "4px",
            fontSize: "14px",
            pointerEvents: "none",
            zIndex: 1000,
            whiteSpace: "nowrap",
          }}
        >
          <div style={{ fontWeight: "bold" }}>{hoveredState}</div>
          <div>{getDeliveryStatus(hoveredState)}</div>
        </div>
      )}
    </div>
  );
};

export default IndiaStatesMap;
