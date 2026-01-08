// src/data/inventoryData.js

export const inventory = [
  // --- Chemicals ---
  { id: 1, name: "Sulphuric Acid", category: "Chemicals", supplier: "DeltaLab Products", quantity: 20, expiry: "2026-08-01" },
  { id: 2, name: "HCL", category: "Chemicals", supplier: "DeltaLab Products", quantity: 15, expiry: "2026-05-12" },
  { id: 3, name: "Isopropanol", category: "Chemicals", supplier: "DeltaLab Products", quantity: 25, expiry: "2026-04-30" },
  { id: 4, name: "Methanol", category: "Chemicals", supplier: "DeltaLab Products", quantity: 18, expiry: "2026-06-10" },
  { id: 5, name: "Ethanal", category: "Chemicals", supplier: "DeltaLab Products", quantity: 10, expiry: "2026-07-01" },

  // --- Diagnostics: Cypress / CYAN ---
  { id: 6, name: "TB Test Kit", category: "Diagnostics", supplier: "Cypress Diagnostics", quantity: 50, expiry: "2025-11-10" },
  { id: 7, name: "H. Pylori Test Kit", category: "Diagnostics", supplier: "Cypress Diagnostics", quantity: 30, expiry: "2025-10-01" },
  { id: 8, name: "COVID-19 Rapid Test", category: "Diagnostics", supplier: "Cypress Diagnostics", quantity: 100, expiry: "2025-09-01" },
  { id: 9, name: "Syphilis Test Kit", category: "Diagnostics", supplier: "Cypress Diagnostics", quantity: 40, expiry: "2025-12-15" },
  { id: 10, name: "HBSAg Test Kit", category: "Diagnostics", supplier: "Cypress Diagnostics", quantity: 45, expiry: "2025-12-20" },
  { id: 11, name: "Malaria Test Kit", category: "Diagnostics", supplier: "Cypress Diagnostics", quantity: 60, expiry: "2026-01-30" },
  { id: 12, name: "Measles Test Kit", category: "Diagnostics", supplier: "Cypress Diagnostics", quantity: 20, expiry: "2025-11-05" },

  // --- Urine Panels ---
  { id: 13, name: "Urine 10 Parameters", category: "Urine Panels", supplier: "CYANElite 290", quantity: 100, expiry: "2025-10-15" },
  { id: 14, name: "Urine 2 Parameters", category: "Urine Panels", supplier: "CYANElite 290", quantity: 80, expiry: "2025-10-15" },
  { id: 15, name: "COC – THC 2 Parameters", category: "Urine Panels", supplier: "CYANElite 290", quantity: 25, expiry: "2025-09-20" },

  // --- Serology ---
  { id: 16, name: "AHG – Anti Human Globulin", category: "Serology", supplier: "CYANVision", quantity: 50, expiry: "2026-02-01" },
  { id: 17, name: "Albumin", category: "Serology", supplier: "CYANVision", quantity: 40, expiry: "2026-03-15" },
  { id: 18, name: "Alkaline Phosphatase", category: "Serology", supplier: "CYANVision", quantity: 60, expiry: "2026-04-10" },
  { id: 19, name: "Anti A", category: "Serology", supplier: "CYANVision", quantity: 35, expiry: "2026-05-01" },
  { id: 20, name: "Anti B", category: "Serology", supplier: "CYANVision", quantity: 35, expiry: "2026-05-01" },
  { id: 21, name: "Anti AB", category: "Serology", supplier: "CYANVision", quantity: 35, expiry: "2026-05-01" },
  { id: 22, name: "Anti C", category: "Serology", supplier: "CYANVision", quantity: 35, expiry: "2026-05-01" },
  { id: 23, name: "Anti A1 Dolichos biflorus Lectin", category: "Serology", supplier: "CYANVision", quantity: 20, expiry: "2026-05-01" },

  // --- Qiagen Diagnostics ---
  { id: 24, name: "QuantiFERON-TB Gold Plus Tubes", category: "Qiagen Diagnostics", supplier: "Qiagen", quantity: 50, expiry: "2026-06-01" },
  { id: 25, name: "RNeasy Mini Kit (50)", category: "Qiagen Diagnostics", supplier: "Qiagen", quantity: 50, expiry: "2026-07-01" },
  { id: 26, name: "RNase-Free DNase Set (50)", category: "Qiagen Diagnostics", supplier: "Qiagen", quantity: 50, expiry: "2026-08-01" },
  { id: 27, name: "QuantiFERON-TB Gold Plus Dispenser Pack", category: "Qiagen Diagnostics", supplier: "Qiagen", quantity: 20, expiry: "2026-09-01" },
  { id: 28, name: "RNeasy Micro Kit (50)", category: "Qiagen Diagnostics", supplier: "Qiagen", quantity: 50, expiry: "2026-06-01" },
  { id: 29, name: "DNeasy Blood & Tissue Kit (50)", category: "Qiagen Diagnostics", supplier: "Qiagen", quantity: 50, expiry: "2026-07-01" },
  { id: 30, name: "QIAprep Spin Miniprep Kit (250)", category: "Qiagen Diagnostics", supplier: "Qiagen", quantity: 250, expiry: "2026-08-01" },

  // --- Abbott Diagnostics ---
  { id: 31, name: "Afinion ACR Test", category: "Abbott Diagnostics", supplier: "Abbott", quantity: 40, expiry: "2026-06-01" },
  { id: 32, name: "Alinity c Clinical Chemistry System", category: "Abbott Diagnostics", supplier: "Abbott", quantity: 10, expiry: "2030-01-01" },
  { id: 33, name: "Alinity I Immunoassay System", category: "Abbott Diagnostics", supplier: "Abbott", quantity: 10, expiry: "2030-01-01" },
  { id: 34, name: "Alinity h-series Hematology", category: "Abbott Diagnostics", supplier: "Abbott", quantity: 10, expiry: "2030-01-01" },
  { id: 35, name: "Alinity hs Slide Maker System", category: "Abbott Diagnostics", supplier: "Abbott", quantity: 10, expiry: "2030-01-01" },
  { id: 36, name: "Alinity m Molecular Analyzer", category: "Abbott Diagnostics", supplier: "Abbott", quantity: 10, expiry: "2030-01-01" },

  // --- HemoCue / Deben Diagnostics ---
  { id: 37, name: "HemoCue Hb 201 DM System", category: "HemoCue Diagnostics", supplier: "Deben Diagnostics", quantity: 15, expiry: "2030-01-01" },
  { id: 38, name: "HemoCue Hb 201+ System", category: "HemoCue Diagnostics", supplier: "Deben Diagnostics", quantity: 15, expiry: "2030-01-01" },

  // --- Antisera ---
  { id: 39, name: "Campylobacter Antisera", category: "Antisera", supplier: "Deben Diagnostics", quantity: 30, expiry: "2026-01-01" },
  { id: 40, name: "Escherichia coli Antisera", category: "Antisera", supplier: "Deben Diagnostics", quantity: 30, expiry: "2026-01-01" },
  { id: 41, name: "Haemophilus influenzae Antisera", category: "Antisera", supplier: "Deben Diagnostics", quantity: 30, expiry: "2026-01-01" },
  { id: 42, name: "Listeria Antisera", category: "Antisera", supplier: "Deben Diagnostics", quantity: 30, expiry: "2026-01-01" },
  { id: 43, name: "Pseudomonas aeruginosa Antisera", category: "Antisera", supplier: "Deben Diagnostics", quantity: 30, expiry: "2026-01-01" },
  { id: 44, name: "Salmonella Antisera", category: "Antisera", supplier: "Deben Diagnostics", quantity: 30, expiry: "2026-01-01" },
  { id: 45, name: "Shigella Antisera", category: "Antisera", supplier: "Deben Diagnostics", quantity: 30, expiry: "2026-01-01" },
  { id: 46, name: "Staphylococcal Coagulase Antisera", category: "Antisera", supplier: "Deben Diagnostics", quantity: 30, expiry: "2026-01-01" },
  { id: 47, name: "Streptococcus pneumoniae Antisera", category: "Antisera", supplier: "Deben Diagnostics", quantity: 30, expiry: "2026-01-01" },
  { id: 48, name: "Vibrio cholerae Antisera", category: "Antisera", supplier: "Deben Diagnostics", quantity: 30, expiry: "2026-01-01" },
  { id: 49, name: "Yersinia Antisera", category: "Antisera", supplier: "Deben Diagnostics", quantity: 30, expiry: "2026-01-01" },

  // --- Lab Consumables / Glassware / Culture Media (abbreviated sample) ---
  { id: 50, name: "Dehydrated Culture Media", category: "Lab Consumables", supplier: "Deben Diagnostics", quantity: 100, expiry: "2027-01-01" },
  { id: 51, name: "Agarose", category: "Lab Consumables", supplier: "Deben Diagnostics", quantity: 100, expiry: "2027-01-01" },
  { id: 52, name: "Antibiotic Sensitivity Discs", category: "Lab Consumables", supplier: "Deben Diagnostics", quantity: 200, expiry: "2027-01-01" },
];
