/** Deduplicate comma-separated or array keyword lists (case-insensitive). */
function dedupeKeywords(...sources) {
  const seen = new Set();
  const result = [];

  const add = (raw) => {
    const term = String(raw).trim();
    if (!term) return;
    const key = term.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    result.push(term);
  };

  sources.forEach((source) => {
    if (Array.isArray(source)) {
      source.forEach(add);
    } else {
      String(source)
        .split(',')
        .forEach(add);
    }
  });

  return result.join(', ');
}

/** Core AeroEdge & site positioning */
const CORE_TERMS = [
  'AeroEdge',
  'drones India',
  'surveillance systems',
  'defence technology',
  'anti-UAV',
  'aerial mapping',
  'military drones',
  'Drone',
  'UAV',
  'IR Optics',
  'Semiconductor',
];

/** Partner & industry companies (RF, semiconductors, defence, sensors, test, optics, connectors) */
const PARTNER_COMPANIES = [
  'Qorvo',
  'Analog Devices',
  'MACOM',
  'Mercury Systems',
  'Skyworks',
  'Mini Circuits',
  'Anokiwave',
  'Custom MMIC',
  'Metasensing',
  'NXP Semiconductors',
  'STMicroelectronics',
  'Infineon Technologies',
  'Rohde & Schwarz',
  'Thales',
  'HENSOLDT',
  'Teledyne Technologies',
  'FLIR Systems',
  'Excelitas',
  'L3Harris',
  'Northrop Grumman',
  'Safran',
  'Leonardo',
  'Spectrum Control',
  'Honeywell',
  'Amphenol',
  'TE Connectivity',
  'Siemens',
  'Bosch Sensortec',
  'Endress+Hauser',
  'SICK AG',
  'Bently Nevada',
  'Meggitt',
  'Kulite',
  'PCB Piezotronics',
  'Kistler',
  'HBK',
  'Maury Microwave',
  'Noisecom',
  'Keysight',
  'VIAVI',
  'Anritsu',
  'National Instruments',
  'Murata',
  'TDK',
  'Advantest',
  'Mitsubishi Electric',
  'NEC',
  'Fujitsu',
  'Hamamatsu Photonics',
  'Nikon',
  'Canon',
  'Olympus',
  'HOYA',
  'Tamron',
  'Bushnell',
  'Keyence',
  'Omron',
  'Panasonic',
  'Rohm',
  'Alps Alpine',
  'Semitec',
  'Hirose',
  'JAE',
  'JST',
  'Sumitomo Electric',
];

/** Additional components & systems */
const ADDITIONAL_COMPONENTS = [
  'Brushless motors',
  'DC Motors',
  'RS Batteries',
  'Altera Chip',
  'Intel Chip',
  'Ophir Zoom Lenses',
  'Infrared Lenses',
  'Ophir Lens',
  'Noisecom Modules',
  'Jammer Parts',
  'Sensitive 5G Chip',
  'Vaisala Weather systems',
  'Vishay Inter technologies',
];

/** Drone & UAV industry */
const DRONE_UAV_INDUSTRY = [
  'UAV systems',
  'FPV drone parts',
  'long range drone',
  'military drone technology',
  'ISR drone systems',
  'VTOL UAV platform',
  'fixed wing UAV',
  'anti jamming drone',
  'AI drone navigation',
  'autonomous flight controller',
  'tactical drone payload',
  'fiber optic drone',
  'EO/IR drone camera',
  'thermal imaging drone',
  'surveillance UAV',
  'drone telemetry module',
  'drone datalink system',
  'GPS denied navigation',
  'secure drone communication',
  'drone video transmission',
  'swarm drone technology',
  'industrial drone mapping',
  'drone SAR imaging',
  'tactical reconnaissance UAV',
  'stealth drone components',
  'low latency drone system',
  'drone propulsion systems',
  'drone motor manufacturer',
  'UAV electronics supplier',
  'drone RF module',
];

/** Drone parts & electronics */
const DRONE_PARTS_ELECTRONICS = [
  'BLDC drone motors',
  'ESC for UAV',
  'drone power distribution board',
  'drone PCB assembly',
  'carbon fiber drone frame',
  'UAV Li-ion battery',
  'drone RF amplifier',
  'telemetry transceiver',
  'flight controller stack',
  'drone GNSS module',
  'drone IMU sensor',
  'industrial UAV electronics',
  'military grade connectors',
  'drone embedded systems',
  'UAV communication chipset',
];

/** IR optics & EO/IR */
const IR_OPTICS_EOIR = [
  'infrared optics',
  'thermal imaging lens',
  'LWIR optics',
  'MWIR camera module',
  'EO/IR payload systems',
  'germanium optical lens',
  'drone thermal camera',
  'uncooled thermal sensor',
  'IR surveillance optics',
  'infrared imaging module',
  'multispectral imaging system',
  'SWIR optics',
  'counter UAS EO/IR',
  'thermal targeting optics',
  'electro optical tracking',
];

/** Rare chips & semiconductors */
const SEMICONDUCTOR_CHIPS = [
  'FPGA modules',
  'radiation hardened FPGA',
  'aerospace semiconductor',
  'AI accelerator chips',
  'RF transceiver IC',
  'GaN power amplifier',
  'microwave RF modules',
  'secure microcontroller',
  'military grade semiconductor',
  'embedded AI chipset',
  'video encoder IC',
  'drone communication chip',
  'optical transceiver module',
  'high speed FPGA',
  'silicon photonics',
  'edge AI processor',
  'low power DSP chip',
  'SDR transceiver IC',
  'industrial embedded processor',
  'anti spoofing GNSS chip',
];

/** Drone brands */
const DRONE_BRANDS = [
  'DJI',
  'T-Motor',
  'CubePilot',
  'Holybro',
  'Matek Systems',
  'Foxeer',
  'RunCam',
  'RadioMaster',
  'FrSky',
];

/** Semiconductor & FPGA brands */
const SEMICONDUCTOR_FPGA_BRANDS = [
  'AMD',
  'Intel',
  'Lattice Semiconductor',
  'Microchip Technology',
  'Texas Instruments',
  'Qualcomm',
  'Broadcom',
  'NVIDIA',
];

/** IR & optics brands */
const IR_OPTICS_BRANDS = [
  'LightPath Technologies',
  'Hikmicro',
  'L3Harris Technologies',
];

const ALL_KEYWORD_ARRAYS = [
  CORE_TERMS,
  PARTNER_COMPANIES,
  ADDITIONAL_COMPONENTS,
  DRONE_UAV_INDUSTRY,
  DRONE_PARTS_ELECTRONICS,
  IR_OPTICS_EOIR,
  SEMICONDUCTOR_CHIPS,
  DRONE_BRANDS,
  SEMICONDUCTOR_FPGA_BRANDS,
  IR_OPTICS_BRANDS,
];

/** @deprecated Use FULL_SEO_KEYWORDS — kept for backward compatibility */
export const PARTNER_INDUSTRY_KEYWORDS = PARTNER_COMPANIES.join(', ');

export const CORE_SEO_KEYWORDS = CORE_TERMS.join(', ');

export const FULL_SEO_KEYWORDS = dedupeKeywords(...ALL_KEYWORD_ARRAYS);

export const DEFAULT_SEO_KEYWORDS = FULL_SEO_KEYWORDS;

/** Merge page-specific keywords with the full global SEO keyword set. */
export function buildSeoKeywords(pageKeywords) {
  if (pageKeywords && String(pageKeywords).trim()) {
    return dedupeKeywords(pageKeywords, FULL_SEO_KEYWORDS);
  }
  return DEFAULT_SEO_KEYWORDS;
}
