-- Create the Industries Table
CREATE TABLE IF NOT EXISTS Industries (
    industry_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

-- Create the Rate Groups Table
CREATE TABLE IF NOT EXISTS RateGroups (
    rate_group_id INTEGER PRIMARY KEY AUTOINCREMENT,
    code TEXT NOT NULL,
    description TEXT NOT NULL,
    industry_id INTEGER,
    FOREIGN KEY (industry_id) REFERENCES Industries(industry_id)
);

-- Create the Industry Codes/Descriptions Table
CREATE TABLE IF NOT EXISTS IndustryCodes (
    industry_code_id INTEGER PRIMARY KEY AUTOINCREMENT,
    code TEXT NOT NULL,
    description TEXT NOT NULL,
    rate_group_id INTEGER,
    FOREIGN KEY (rate_group_id) REFERENCES RateGroups(rate_group_id)
);

-- Hazards Table
CREATE TABLE IF NOT EXISTS Hazards (
    hazard_id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL,
    description TEXT NOT NULL
);

-- Controls Table
CREATE TABLE IF NOT EXISTS Controls (
    control_id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL,
    description TEXT NOT NULL
);

-- IndustryCodeHazards Linking Table
CREATE TABLE IF NOT EXISTS IndustryCodeHazards (
    industry_code_id INTEGER NOT NULL,
    hazard_id INTEGER NOT NULL,
    FOREIGN KEY (industry_code_id) REFERENCES IndustryCodes(industry_code_id),
    FOREIGN KEY (hazard_id) REFERENCES Hazards(hazard_id),
    PRIMARY KEY (industry_code_id, hazard_id)
);

-- HazardControls Linking Table
CREATE TABLE IF NOT EXISTS HazardControls (
    hazard_id INTEGER NOT NULL,
    control_id INTEGER NOT NULL,
    FOREIGN KEY (hazard_id) REFERENCES Hazards(hazard_id),
    FOREIGN KEY (control_id) REFERENCES Controls(control_id),
    PRIMARY KEY (hazard_id, control_id)
);

