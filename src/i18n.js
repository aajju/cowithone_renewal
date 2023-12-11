// i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // header
      header_solution: "Solution",
      header_result: "Result",

      header_about: "About",
      header_faq: "FAQ",
      header_contact: "Contact",

      // footer
      footer_company: "COWITHONE Inc. ",
      footer_ceo: "| CEO : Yoon Sang-jo",
      footer_businessnumber: "Business Number",
      footer_addr:
        "Address : Daehak 4ro 16, Youngtong-gu, Suwon (Ace Gwanggyo Tower 207)",
      footer_customercenter: "Customer Service",
      footer_tel: "Tel : +82) 31-212-5565",
      footer_email: "Email : help@cowithone.com",

      // home
      home_title1: "Innovate underground pipeline management",
      home_title2: "with Internet of things(IoT)",
      home_s2_title1: "We monitor various events in underground",
      home_s2_title2: "in real-time using various sensors and ICT.",
      home_s2_sts_description1:
        "Every year, about 260 sinkholes happen on average.",
      home_s2_sts_description2: "Detect early and prevent major disasters.",
      home_s2_psps_description1: "Real-time leak detection and locating leaks.",
      home_s2_psps_description2:
        "You can effectively manage water and sewage pipelines.",
      home_s2_morebtn: "LEARN MORE",
      home_s3_customer: "CUSTOMER",
      home_s3_customer_d1: "Customers use our solution",
      home_s3_customer_d2: "for diverse reasons.",
      home_s3_engineer: "Engineering & Construction",
      home_s3_engineer_r1: "Increased Win Probability",
      home_s3_engineer_r1_d1: "Enhanced Scoring for Project Design",
      home_s3_engineer_r2: "Turnkey Projects",
      home_s3_engineer_r2_d1: "- Technical Bid  : 7 point",
      home_s3_engineer_r2_d2: "- Smart Turnkey : 10~20 point",
      home_s3_engineer_r3: "Non-turnkey Projects",
      home_s3_engineer_r3_d1: "- Add 'Smart Technology'",
      home_s3_engineer_r3_d2: "Evaluation Criterion",

      home_s3_government: "Government & Local Government",
      home_s3_government_r1: "Reduced Maintenance Costs",
      home_s3_government_r1_d1: "- Cost-effective Site Visits",
      home_s3_government_r1_d2: "- Recovery Cost Responsibility Provider",
      home_s3_government_r1_d3: "- Reduced Water Leakage Damages",
      home_s3_government_r1_d4: "- Reduced Unidentified Waste Treatment Costs",
      home_s3_government_r1_d5: "- Extended Lifespan of Water and Sewer Pipes",

      home_s3_publicinstitutions: "Public Institutions",
      home_s3_publicinstitutions_r1: "Land Development Project",
      home_s3_publicinstitutions_r1_d1:
        "- The Ultimate Solution for Smart Cities",
      home_s3_publicinstitutions_r1_d2: "- National Smart City Pilot Project",
      home_s3_publicinstitutions_r1_d3:
        "(Busan Eco Delta City, Sejong 5-1 Development)",
      home_s3_publicinstitutions_r2: "Metropolitan Water Supply",
      home_s3_publicinstitutions_r2_d1:
        "- 광역상수도 관리를 위한 최고의 솔루션",
      home_s3_publicinstitutions_r2_d2: "- Accurate Pipeline Location",
      home_s3_publicinstitutions_r2_d3: "- Preventing Pipeline Damage",
      home_s3_publicinstitutions_r2_d4: "- Swift Leak Detection",
      home_s4_partner: "In use by various organizations and companies.",

      home_s6_q1:
        "Doesn't it require a substantial investment for system setup?",
      home_s6_a1:
        "The cost of system implementation varies significantly depending on the system deployment method, such as BPS system, STS system, PSPS system, etc. Based on current standards for water and sewage construction expenses, it is estimated that there may be an increase of approximately 3% to 8%. The increase is higher for smaller pipelines and lower for larger ones. However, by implementing this system, there is no need for additional marker installation, and there is no requirement for a separate GIS system, so the actual cost increase is not substantial.",
      home_s6_q2:
        "What is the lifespan of products like the Smart Prevention Sheet and Leak Detection Sensors?",
      home_s6_a2:
        "The lifespan of detection cables buried underground is influenced by external pressure and groundwater. Our used detection cables are coated with lead-free Teflon coating, known for its excellent water resistance and weather resistance, followed by PVC coating. These cables are inserted into sheets with butyl rubber, making them suitable for long-term, permanent use. Leak detection sensors are embedded within protective covers (or sensor enclosures), ensuring their long-term, permanent usability.",
      home_s6_q3:
        "What are the additional points awarded when using the COWITHONE's Solution?",
      home_s6_a3:
        "According to a press release from the Ministry of Land, Infrastructure and Transport on July 20, 2022, to promote smart construction, a minimum score (7 points) for smart technology has been introduced in the evaluation of technical bids such as turnkey projects. For smart turnkey projects where smart technology application is a bidding condition, 10 to 20 points are allocated. In addition, for non-turnkey projects, 'smart technology' has been added as an evaluation criterion in the engineering comprehensive assessment, ensuring that smart technology is considered from the design stage. Our system is currently being adopted and implemented in the government's smart city pilot zones, namely Busan EDC site and Sejong City 5-1 Development, and by incorporating recognized smart technology into our system design, additional points can be awarded in the bidding process.",
      home_s6_morebtn: "More FAQs",
      home_s7_title: "Do you want to learn more about COWITHONE solutions?",
      home_s7_subtitle: "We will get back to you as soon as possible.",
      home_s7_btn: "CONTACT US",

      // About
      about_s1_title1: "COWITHONE Solves Diverse",
      about_s1_title2: "Underground Pipe Challenges.",
      about_s1_subtitle1: "Fastest Event Detection!",
      about_s1_subtitle2: "Most Accurate Event Location!",

      about_s1_d1: "Essentials of Pipe Maintenance",
      about_s1_d1_1: "Pipeline",
      about_s1_d1_2: "Inspection",
      about_s1_d2: "Key Aspects of Pipe Maintenance",
      about_s1_d2_1: "Preventing",
      about_s1_d2_2: "Pipe Damage",
      about_s1_d3: "Preventing Major Disasters",
      about_s1_d3_1: "Early Detection",
      about_s1_d3_2: "of Cavity",
      about_s1_d4: "Every Drop of Water is Precious",
      about_s1_d4_1: "Leak Detection",
      about_s1_d4_2: "System",

      about_s2_d1: "Pipeline Inspection(Accurate Location)",
      about_s2_d1_1: "Fast and accurate pipeline inspection is essential",
      about_s2_d1_2: " for quickly responding to underground safety incidents.",

      about_s2_t_r1_1: "Categories",
      about_s2_t_r1_2: "Our own method",
      about_s2_t_r1_3: "Magnetic Marker Method ",
      about_s2_t_r1_4: "GPR Method",

      about_s2_t_r2_1: "Principle",
      about_s2_t_r2_2: "Smart Preventive Sheet",
      about_s2_t_r2_21: "(RS485 Communication)",
      about_s2_t_r2_3: "Installation of Magnetic Marker",
      about_s2_t_r2_4: "Using Ground Penetrating Radar",

      about_s2_t_r3_1: "Method",
      about_s2_t_r3_11: "Method",
      about_s2_t_r3_12: "방법",
      about_s2_t_r3_21: "- Real-time Monitoring with Detector",
      about_s2_t_r3_22: "- UT-9000",
      about_s2_t_r3_23: "(manual operation)",
      about_s2_t_r3_3: "Exploration with Magnetometer",
      about_s2_t_r3_4: "Exploration Using GPR Equipment",

      about_s2_t_r4_1: "Depth Check",
      about_s2_t_r4_11: "Depth",
      about_s2_t_r4_12: "Check",
      about_s2_t_r4_2: "Approx. 10m",
      about_s2_t_r4_3: "Approx. 3m",
      about_s2_t_r4_4: "Approx. 2m",

      about_s2_t_r5_1: "Pros",
      about_s2_t_r5_21: "- Max Depth (10m)",
      about_s2_t_r5_22: "- Real-time Monitoring",
      about_s2_t_r5_23: "- Pipe Damage Prevention",
      about_s2_t_r5_24: "- Low Loss Probability",
      about_s2_t_r5_3: "Most Economical",
      about_s2_t_r5_4: "Detects Aging Pipes",

      about_s2_t_r6_1: "Cons",
      about_s2_t_r6_21: "- Initial Investment Required",
      about_s2_t_r6_22: "- Unable to Detect Aging Existing Pipes",
      about_s2_t_r6_31: "- False Alarms in Case of Loss",
      about_s2_t_r6_32: "- low depth(3m)",
      about_s2_t_r6_33: "- Unable to Detect Aging Existing Pipes",
      about_s2_t_r6_41: "- High Detection Costs",
      about_s2_t_r6_42: "- low depth(2m)",

      about_s3_d1: "Preventing Pipe Damage",
      about_s3_d1_1: "Over 70% Caused by Third-Party Excavation.",
      about_s3_d1_2: "Especially in preventing unauthorized excavation.",
      about_s3_t_r1_3: "Protective Cover",
      about_s3_t_r1_4: "Routine Inspection",
      about_s3_t_r2_21: "24/7 Monitoring via",
      about_s3_t_r2_22: "Smart Prevention Sheets",
      about_s3_t_r2_3: "Attach protective plates above pipes",
      about_s3_t_r2_4: "Manager on-site visits",
      about_s3_t_r3_1: "Monitoring",
      about_s3_t_r4_21: "- 24/7 Monitoring",
      about_s3_t_r4_22: "- Pipe Damage Prevention",
      about_s3_t_r4_23: "- Fast and Accurate Event Location Data",
      about_s3_t_r4_3: "Safest Pipe Damage Prevention",
      about_s3_t_r4_4: "Applicable to Existing Pipe",
      about_s3_t_r5_21: "- Initial Investment",
      about_s3_t_r5_22: "- Challenging for Existing Pipe",
      about_s3_t_r5_33: "- Prevents Excavation but Not Drilling Machine",
      about_s3_t_r5_41:
        "- Limited Prevention with Regular (2 Times a Day) Operation",
      about_s3_t_r5_42: "- Admin Maintenance Cost",
      about_s3_d2_1: "Prevention Effect ",
      about_s3_d2_2: "Innovative Maintenance Savings",
      about_s3_d3: "Reduced Administrative Inspection Costs",
      about_s3_d3_1:
        "Real-time Pipe Condition Monitoring from PC, No On-site Visits.",
      about_s3_d3_2:
        "Immediate Alerts for Excavation Accidents to Administrators.",
      about_s3_d4: "Cost Recovery from Responsible Party",
      about_s3_d4_1:
        "Small cracks, initially harmless, can lead to corrosion over time,",
      about_s3_d4_2: "causing leaks and ground subsidence (sinkholes).",
      about_s3_d5: "Extended Pipe Lifespan Benefits",
      about_s3_d5_1: "150% Extended Pipe Lifespan.",
      about_s3_d5_2:
        "If the pipe cost is $10 million, a $5 million savings would result.",
      about_s4_d1: "Early Detection of Cavity",
      about_s4_d1_1:
        "Annual average: 257 ground subsidence incidents, nearby.(In Korea)",
      about_s4_t_r2:
        "Sinkball Installation (Early Ground Subsidence Detection)",
      about_s4_t_r21: "Sinkball Installation",
      about_s4_t_r22: "(Early Ground Subsidence Detection)",
      about_s4_t_r5_33: "- Inspection Once Every 5 Years",
      about_s3_d2: "Cutting-Edge Technology",
      about_s4_d3: "24/7 Real-Time Monitoring",
      about_s4_d3_1:
        "GPR Method: Inspections Every 5 Years, May Miss Incidents in Between.",
      about_s4_d3_2: "However, our system provides 24/7 real-time monitoring.",
      about_s4_d4: "No on-site inspections required",
      about_s4_d4_1: "GPR method requires experts and expensive equipment,",
      about_s4_d4_2: "leading to higher detection costs.",
      about_s4_d5: "Real-time Cavity and Location Information",
      about_s4_d5_1:
        "Our system maps Cavities in real-time without on-site Inspection.",
      about_s4_d5_2: "Accuracy within 3% (up to 45m)",

      about_s5_d1: "Leak Detection System",
      about_s5_d1_1: "Annual Losses Due to Leaks: $5.1 billion(in Korea)",
      about_s5_t_r1_3: "Acoustic",
      about_s5_t_r1_4: "Flowmeter (Pressure Gauge)",
      about_s5_t_r2_2: "Physical Sensors for Joint Leak Detection",
      about_s5_t_r2_3: "Analyzing ultrasound for leak detection",
      about_s5_t_r2_4: "Analyzing flow rate (pressure) for leak detection",
      about_s5_t_r3_11: "Leak Detection",
      about_s5_t_r3_12: "Accuracy",
      about_s5_t_r4_12: "Time",
      about_s5_t_r4_2: "Real-time",
      about_s5_t_r4_3: "More than 15 days",
      about_s5_t_r5_11: "Leak Location",
      about_s5_t_r5_2: "3% Error Margin (Max 50m)",
      about_s5_t_r5_31: "Block-Level Detection (Minimum 10km+)",
      about_s5_t_r5_32: "Additional On-Site Detection Required",
      about_s5_t_r6_21: "- Detecting leaks within 1 min.",
      about_s5_t_r6_22: "- Event location within 3% accuracy",
      about_s5_t_r6_23: "- Potable and Wastewater Leak Detection",
      about_s5_t_r6_3: "Convenient for Aging Pipelines",
      about_s5_t_r7_31:
        "- Inefficient Site Visits Due to Incorrect Leak Assessments",
      about_s5_t_r7_32: "- Low-Pressure and Small Leaks Not Detectable",
      about_s5_t_r7_33: "- More than 15 days",
      about_s5_t_r7_34: "(Excessive Leakage Costs)",
      about_s5_t_r7_35: "- Additional On-Site Leak Location Detection",
      about_s5_t_r7_36:
        "(High Leakage Costs and Specialist Personnel Expenses)",
      about_s5_d2: "Advanced Technology Compared to Existing Methods",
      about_s5_d3: "100% Leak Detection Rate",
      about_s5_d3_1:
        "100% Detection Through Direct Sensor Verification at Joints",
      about_s5_d3_2:
        "Conventional: Indirect Verification Using Acoustic and Flow Sensors",
      about_s5_d4: "Swift Leak Detection Time",
      about_s5_d4_1:
        "Preventing Excessive Leakage Costs by Detecting Leaks in Real Time",
      about_s5_d4_2:
        "Conventional: 15-Day Leakage Assessment of Suspected Leak Areas",
      about_s5_d5: "Accurate Leak Location",
      about_s5_d5_1: "Mapping Leak Locations with 3% Error Margin",
      about_s5_d5_2:
        "Conventional: On-site Visits by Specialists (Approx. 10km)",
      about_s5_d5_3:
        "with Leak Detection Equipment (High Leak Detection Costs)",
      about_s6_title: "Additional Features",
      about_s6_subtitle1: "We maintain pipes",
      about_s6_subtitle2: "with various additional features.",
      about_s6_d1: "Asset Management",
      about_s6_d1_1:
        "We manage asset and construction history from construction ",
      about_s6_d1_2:
        "Administrators can effortlessly access pipe asset data and construction history.",
      about_s6_d1_tag1: "Pipeline Location",
      about_s6_d1_tag2: "GIS",
      about_s6_d1_tag3: "Construction History",
      about_s6_d1_tag4: "Maintenance History",
      about_s6_d2: "Corrosion prevention voltage check",
      about_s6_d2_1: "Real-time corrosion monitoring for coated pipes",
      about_s6_d2_tag1: "Cathodic Protection",
      about_s6_d2_tag2: "Coated steel pipe",
      about_s6_d2_tag3: "Gas pipe",
      about_s8_title: "Finally",
      about_s8_subtitle1:
        "Direction of underground facility maintenance policy is shifting",
      about_s8_subtitle2: "from a reactive approach to proactive management.",

      // solution
      solution_s1_title: "Real-time Underground Facility Monitoring System",
      solution_s3_bps_title: "BPS (Breakage Prevention System)",
      solution_s3_bps_subtitle: "Cost-effective yet good performance",
      solution_s3_bps_description1:
        "- Preventing pipe damage alone prevents 80% of the issues",
      solution_s3_bps_description2: "- Ease of construction and maintenance",
      solution_s3_bps_components:
        "Components : RM-5000, RM-4000, Smart Preventive Sheet",
      solution_s3_sts_title: "STS (Sinktree System)",
      solution_s3_sts_subtitle: "Safety added",
      solution_s3_sts_description:
        "- Early Detection for preventing major disasters",
      solution_s3_sts_components: " Sinkball",
      solution_s3_psps_title: "PSPS (Perfect smart pipeline System)",
      solution_s3_psps_subtitle: "Perfect Solution for water",
      solution_s3_psps_description1: "- Each drop of water is also precios",
      solution_s3_psps_description2:
        "- The most complete way to use the water supply",
      solution_s3_psps_components:
        " Smartsheets, leak sensors and protective covers",
      solution_s4_title: "Our Solution",
      solution_s4_subtitle:
        "Choose solution based on pipe type, budget, and functionality",
      solution_s4_btn: "Download Catalog",
      solution_s4_table_summary: "Summary",
      solution_s4_table_prevent: "Prevent pipe damage",
      solution_s4_table_detect_sinkhall: "Cavity detection",
      solution_s4_table_prevent_sinkhall: "Cavity prevention",
      solution_s4_table_detect_water: "Leak detection",
      solution_s4_table_components: "Components",
      solution_s4_table_detector: "Event Detector",
      solution_s4_table_preventsheet: "Smart Preventive Sheet",
      solution_s4_table_sinkball: "Sinkball",
      solution_s4_table_smartsheet: "Smart Sheet",
      solution_s4_table_watersensor: "leak detection sensor",
      solution_s4_table_cover: "& Protective cover",
      solution_s4_table_corrosion: "Corrosion Prevention",
      solution_s4_table_cathodic: "(Cathodic Protection)",
      solution_s4_table_corrosion_description1: "In Coating Pipes",
      solution_s4_table_corrosion_description2: "regardless of solution",
      solution_s4_table_waterpipe: "Water Pipe",
      solution_s4_table_sewagepipe: "Sewage Pipe",
      solution_s4_table_stormdrain: "Storm Drain",
      solution_s4_table_wastewaterpipe: "Wastewater Pipe",
      solution_s4_table_gaspipe: "Gas pipe",
      solution_s4_table_heatingpipe: "Heating Pipe",
      solution_s4_table_oilpipeline: "Oil Pipeline",
      solution_s4_table_powerpipe: "Power Pipe",
      solution_s4_table_etc: "Etc Pipes",
      solution_s5_title: "Components",
      solution_s5_detector: "Detector",
      solution_s5_detector_description1:
        "Detect events and send data to the server",
      solution_s5_detector_description2: "(AC Power)",
      solution_s5_detector_description3:
        "Detect events(damage, leakage, cavity)",
      solution_s5_detector_description4: "(Solar Power)",
      solution_s5_preventsheet_description1:
        "Install 30 to 50 cm above the pipe",
      solution_s5_preventsheet_description2: "to prevent damage to the pipe",
      solution_s5_sinkball_description1: "Prevent major disasters",
      solution_s5_sinkball_description2: "by detecting cavity",
      solution_s5_smartsheet_description1:
        "Attached to the outer surface of the pipe ",
      solution_s5_smartsheet_description2:
        "and Connects leak sensors and detector",
      solution_s5_leaksensor_description: "Detects leaks at the joints",

      // result
      result_s1_title1: "COWITHONE solutions are ",
      result_s1_title2: "already in use by many clients",
      result_s2_title: "Major Clients",
      result_s2_subtitle1:
        " We have experience in delivering in various fields",
      result_s2_subtitle2:
        "including land development (water supply and sewage),",
      result_s2_subtitle3:
        "metropolitan water supply, industrial and agricultural water, seawater intakes, and river maintenance",
      result_s2_t_r1_1: "Client",
      result_s2_t_r1_2: "Site",
      result_s2_t_r1_3: "Pipes",
      result_s2_t_r1_4: "Solution",
      result_s2_t_cli_1: "K-WATER",
      result_s2_t_cli_2: "Korea Rural Community Corporation",
      result_s2_t_cli_3: "Korea Hydro & Nuclear Power",
      result_s2_t_cli_4: "Namyangju-si",
      result_s2_t_cli_5: "Songpa-gu Office",
      result_s2_t_cli_6: "Korea Land and Housing Corporation(LH)",
      result_s2_t_site_1: "Hwaseong Songsan GreenCity",
      result_s2_t_site_2: "Busan EcoDeltaCity 2-4 complex",
      result_s2_t_site_3: "Busan EcoDeltaCity 2-5 complex",
      result_s2_t_site_4: "Suwon Samsung Electronics Factory",
      result_s2_t_site_5: "Boryeong/Buyeo Relocating",
      result_s2_t_site_6: "Siheung Metropolitan Water",
      result_s2_t_site_7: "Incheon Geondan district",
      result_s2_t_site_8: "Suwon Imok district",
      result_s2_t_site_9: "Hanul Nuclear Power Plant",
      result_s2_t_site_10: "Namyangju Joan",
      result_s2_t_site_11: "Songpa",
      result_s2_t_site_12: "Seongnam Godeung district",
      result_s2_t_water: "Water Pipe",
      result_s2_t_water2: "Water, Sewage Pipe",
      result_s2_t_ind_water: "Industrial Water",
      result_s2_t_agri_water: "Agricultural Water",
      result_s2_t_metro_water: "Metropolitan Water",
      result_s2_t_seawater: "Seawater intakes Pipe",
      result_s2_t_sewage_pressure: "Sewage Pressure Pipe",
      result_s2_t_sewage_pressure2: "Sewage Pressure Pipe",
      result_s2_t_river_water: "River Maintenance Water",
      result_s2_t_bps: "BPS (Breakage Prevention System)",
      result_s2_t_sts: "STS (Sinktree System)",
      result_s2_t_psps: "PSPS (Perfect smart pipeline System)",
      result_s2_t_lss: "LSS (Leakage Sensing System)",

      result_s3_title: "PARTNERS",
      result_s3_subtitle: "We collaborate with various partners",
      result_s3_c1: "Local Government",
      result_s3_c2: "Public Institutions",
      result_s3_c3: "Construction",
      result_s3_c4: "Engineering",
      result_s3_c5: "Development partner",

      result_s4_title: "Patent Achievements",
      result_s4_patent: "Patent",
      result_s4_patent_sub:
        "19 Patent, 1 Utility Model, 2 Design Registrations",

      result_s4_patent_t_r1_2: "Patent Number",
      result_s4_patent_t_r1_3: "Patent Title",

      result_s4_patent_t_r2_1: "Patent",
      result_s4_patent_t_r2_2: "No. 10-0869052",
      result_s4_patent_t_r2_3:
        "Leak and Damage Detection Pipeline with Easy Channel Location Identification",

      result_s4_patent_t_r3_2: "No. 10-0908137",
      result_s4_patent_t_r3_3: "Piping Material Connection Detection Device",

      result_s4_patent_t_r4_2: "No. 10-0927464",
      result_s4_patent_t_r4_3: "Piping Material Connection Detection Device",

      result_s4_patent_t_r5_2: "No. 10-1103310",
      result_s4_patent_t_r5_3:
        "Pipeline Management System with Damage Detection Tape",

      result_s4_patent_t_r6_2: "No. 10-1173592",
      result_s4_patent_t_r6_3:
        "System and Method for Preventing Damage to Pipes and Verifying the Location of Damage",

      result_s4_patent_t_r7_2: "No. 10-1281507",
      result_s4_patent_t_r7_3:
        "Tube for Corrosion Prevention in Pipe Connections",

      result_s4_patent_t_r8_2: "No. 10-1281508",
      result_s4_patent_t_r8_3: "Pipe Joint Device",

      result_s4_patent_t_r9_2: "No. 10-1412605",
      result_s4_patent_t_r9_3: "Pipe Joint Device",

      result_s4_patent_t_r10_2: "No. 10-1575739",
      result_s4_patent_t_r10_3:
        "Underground Pipes Management System and Method",

      result_s4_patent_t_r11_2: "No. 10-1690542",
      result_s4_patent_t_r11_3:
        "Leak Detection Device, Its Manufacturing Method, Suitable Attachment Device, and Leak Detection System Employing the Same",

      result_s4_patent_t_r12_2: "No. 10-1898447",
      result_s4_patent_t_r12_3:
        "Leak Detection Sheet and Leak Detection Device Using the Same",

      result_s4_patent_t_r13_2: "No. 10-0908137",
      result_s4_patent_t_r13_3: "Cavity Detection Sensor",

      result_s4_patent_t_r14_2: "No. 10-1971473",
      result_s4_patent_t_r14_3:
        "Pipe Joint Defect Detection Sensor and Defect Detection System Using the Same",

      result_s4_patent_t_r15_2: "No. 10-2052343",
      result_s4_patent_t_r15_3:
        "Leak Detection Sensor and Leak Detection System Using the Same",

      result_s4_patent_t_r16_2: "No. 10-2052349",
      result_s4_patent_t_r16_3:
        "Leak Detection Device and Leak Detection System Using the Same",

      result_s4_patent_t_r17_2: "No. 10-2120724",
      result_s4_patent_t_r17_3:
        "Detection Wire Sheet Attachment Sensor and Method for Attaching Detection Wire to Pipe Joints",

      result_s4_patent_t_r18_2: "No. 10-2139816",
      result_s4_patent_t_r18_3:
        "Underground Pipes Damage Prevention Sheet and Its Manufacturing Method",

      result_s4_patent_t_r19_2: "No. 10-0908137",
      result_s4_patent_t_r19_3:
        "Field-Intelligent Underground Facility Safety Management Device and Method Using UF Code Pad Unit and Underground Pipes Measurement AI Robot Module",

      result_s4_patent_t_r20_1: "Utility Model",
      result_s4_patent_t_r20_2: "No. 20-0471757",
      result_s4_patent_t_r20_3: "Detection Tape for Locating Pipe Damage",

      result_s4_patent_t_r21_1: "Design Registration",
      result_s4_patent_t_r21_2: "No. 30-0703793",
      result_s4_patent_t_r21_3: "Pipe Joint Leakage Detection Protective Cover",

      result_s4_patent_t_r22_2: "No. 30-0703793-01",
      result_s4_patent_t_r22_3: "Pipe Joint Leakage Detection Protective Cover",

      result_s4_patentapp: "Patent Application",
      result_s4_patentapp_sub:
        "COWITHONE continues to advance through ongoing research",

      result_s4_patentapp_t_r1_1: "Application Date",
      result_s4_patentapp_t_r1_2: "Application Number",
      result_s4_patentapp_t_r1_3: "Patent Application Title",

      result_s4_patentapp_t_r2_2: "No. 2020-0187127",
      result_s4_patentapp_t_r2_3:
        "Leak Detection Sensor and Method Using the Same",

      result_s4_patentapp_t_r3_2: "No. 2020-0187181",
      result_s4_patentapp_t_r3_3:
        "Leak Detection Sensor, Sensor Housing Part for Inserting the Sensor, and Protective Cover for Inserting the Sensor Housing Part",

      result_s4_patentapp_t_r4_2: "No. 2020-0187204",
      result_s4_patentapp_t_r4_3:
        "Leak Detection Sensor and Protective Cover for Inserting the Sensor Housing Part",

      result_s4_patentapp_t_r5_2: "No. 2021-0065020",
      result_s4_patentapp_t_r5_3: "Detection Wire Damage Determination Device",

      result_s4_patentapp_t_r6_2: "No. 2021-0120400",
      result_s4_patentapp_t_r6_3:
        "Detection Wire Damage Determination Device and Method",
      result_s5_title: "Other Achievements",
      result_s5_subtitle: "Awards and Certifications",
      result_s5_subtitle_description:
        "2 Innovative Product Certifications and 10 Presidential Awards!",
      result_s5_t_r1_2: "Description",
      result_s5_t_r1_3: "Governing Body",
      result_s5_t_certifi: "Certification",
      result_s5_t_awards: "Award",

      result_s5_t_r2_2:
        "Innovative Product (Sewer and Water Pipeline Damage Prevention and Leak Detection System)",
      result_s5_t_r2_3: "Ministry of Environment (South Korea)",

      result_s5_t_r3_2:
        "Innovative Product (SinkTree System Incorporating AR Technology to Prevent Sinkholes)",
      result_s5_t_r3_3: "Ministry of SMEs and Startups (South Korea)",

      // result_s5_t_r4_2: "",
      result_s5_t_r4_3: "KIC",

      // result_s5_t_r5_2: "",
      // result_s5_t_r5_3: "",

      result_s5_t_r6_2:
        "Selection of Excellent Inventions for Priority Purchase Products",
      result_s5_t_r6_3: "Korea Invention Promotion Association",

      result_s5_t_r7_2: "Korean Intellectual Property Office Commendation",
      result_s5_t_r7_3: "Korean Intellectual Property Office",

      result_s5_t_r8_2: "Korea Disaster Prevention Association Commendation",
      result_s5_t_r8_3: "Korea Disaster Prevention Association",

      result_s5_t_r9_2: "President's Award",
      result_s5_t_r9_3: "Ministry of the Interior (South Korea)",

      result_s5_t_r10_2: "Korea Excellent Patent Award",
      result_s5_t_r10_3: "The Hankook Ilbo",

      result_s5_t_r11_2: "Water Management Green Technology Award",
      result_s5_t_r11_3: "Korea Environment Corporation",

      result_s5_t_r12_2: "Ministry of Public Safety and Security Commendation",
      result_s5_t_r12_3: "Ministry of Public Safety and Security (South Korea)",

      result_s5_t_r13_2: "Minister's Award at the Smart City Business Fair",
      result_s5_t_r13_3:
        "Ministry of Land, Infrastructure and Transport (South Korea)",

      result_s5_t_r14_2:
        "Excellent Award at Gyeonggi Safety Industry Promotion Audition",
      result_s5_t_r14_3: "Gyeonggi-do",

      result_s5_t_r15_2: "The Korea Environmental Grand Award",
      result_s5_t_r15_3: "Ministry of Trade, Industry and Energy (South Korea)",

      // faq
      faq_title: "Frequently Asked Questions",

      faq_cost: "Cost",
      faq_solution: "Solution",
      faq_legal: "Legal",
      faq_other: "Other",

      faq_cost_q1: "Is the system setup cost high?",
      faq_cost_a1:
        "The system setup cost varies significantly depending on the system construction method, such as BPS system, STS system, PSPS system, etc. When using the current standard construction cost for sewer and water pipelines as a reference, it is estimated to increase by approximately 3-8%. The increase is higher for small pipelines and lower for large pipelines. However, implementing this system eliminates the need for marker installation and a separate GIS system, so the actual cost increase is not substantial.",

      faq_cost_q2: "Is the system maintenance cost high?",

      faq_cost_a2:
        "The system maintenance cost includes electricity, communication, and consumable replacement expenses. RM-5000 uses external power, while RM-4000 uses solar power, resulting in lower electricity costs. Communication expenses are only incurred for RM-5000, and the annual total cost of electricity and communication is approximately $0.13 per square meter. Even with regular replacement of consumables, the annual cost does not exceed $1.82 per square meter.",

      faq_solution_q1:
        "What is the lifespan of products such as Smart Prevention Sheets and Leak Detection Sensors?",

      faq_solution_a1:
        "The lifespan of detection wires buried underground is influenced by external pressure and groundwater. Our detection wires are coated with lead for excellent water and weather resistance, followed by PVC coating. These detection wires are inserted into sheets with butyl rubber, allowing for permanent use. Leak detection sensors are embedded in protective covers (or sensor protection devices), making them suitable for permanent use as well.",

      faq_solution_q2:
        "What type of power source is used for the remote monitoring device?",

      faq_solution_a2:
        "The remote monitoring device is powered by either an external power source or solar energy. In the system configuration, only one unit (RM-5000) uses an external power source, while the others (RM-4000) rely on solar energy.",

      faq_solution_q3:
        "Do we need to make frequent site visits to monitor the battery level when using solar power?",

      faq_solution_a3:
        "You can check the battery level in the program, so there's no need to visit the site.",

      faq_solution_q4:
        "Is it possible to monitor multiple types of pipes, even when they are mixed, by configuring them into a single network?",

      faq_solution_a4:
        "Absolutely. One of the advantages of our system is the ability to efficiently manage various types of pipes, sizes, and diameters by configuring them into a single network. Our system can be implemented for systems ranging from a minimum of D80 to a maximum of D3,000.",

      faq_solution_q5:
        "Is it relatively straightforward to maintain the detection wires?",

      faq_solution_a5:
        "Since the detection device sends out very low-level signals, there's no risk of electrical shock. To repair a damaged detection wire, simply cut it, insert it into a connecting jack, and then attach protective tape to prevent groundwater ingress.",
      faq_solution_q6:
        "Sewer or stormwater pipes often use non-metallic pipes and are typically buried underground at depths of less than 5 meters. Is it possible to conduct pipeline inspections in such cases?",

      faq_solution_a6:
        "You can detect pipeline locations up to a depth of 10 meters using the detection wires embedded in Smart Sheets or Smart Prevention Sheets. Therefore, there's no need to use traditional magnetic markers, RF chips, or locating cables.",

      faq_solution_q7:
        "How much can the system extension prolong the lifespan of underground pipes?",

      faq_solution_a7:
        "According to statistics from the United States, the causes of water main breaks are attributed to third-party damage at 33%, external corrosion at 32%, and internal corrosion at 10%. In contrast, data from the South Korean Ministry of Environment indicates third-party damage at 10% and aging facilities at 87.3%. Due to these reasons, after approximately 30 years, the pipelines are categorized as aged and require replacement considerations. By implementing our system, it efficiently addresses issues related to third-party damage and joint leaks, extending the lifespan by at least 1.5 times.",

      faq_solution_q8: "How do administrators receive alerts?",

      faq_solution_a8:
        "To detect joint leaks or ground subsidence, we collect all information related to joints, including detection wire length, coordinates, and facility attributes, from remote monitoring devices. This data is then stored in a database on our server. We also store administrators' phone numbers. If a detection wire is cut or a leak detection sensor (or sinkhole) is activated, the detection device sends this information to the server, which compares it with the pre-established database to accurately determine the event's location and notifies the administrators accordingly.",

      faq_legal_q1:
        "Smart City Regulations: How Cowithone's Solution Ensures Compliance",

      faq_legal_a1_1:
        "The Smart City Act aims to enhance urban competitiveness, promote sustainable development, and improve the quality of life and competitiveness. It was enacted to promote the intelligence of public facilities in smart city construction by integrating technology such as electronics, control, and communication into construction methods.",

      faq_legal_a1_2:
        "- Our solution involves installing a real-time monitoring system on or above the infrastructure (water, sewage, electricity, communication, power, city gas, oil pipelines, etc.) buried underground to ensure the safety of these facilities. It utilizes information communication technology to monitor infrastructure for damage, leaks, and ground subsidence in real-time, providing instant detection and event location notification.",

      faq_legal_q2:
        "Water Supply Design Standards: How Cowithone's Solution Ensures Compliance",

      faq_legal_a2_1:
        "The key contents of the Water Supply Design Standards (2017 edition) are as follows:",
      faq_legal_a2_2: "General Information",
      faq_legal_a2_3:
        "Under Section 3.1 General Provisions (3) of the design basic requirements,",
      faq_legal_a2_4:
        "It should not be overly simplified even in emergency situations such as natural disasters like earthquakes, floods, typhoons, droughts, accidents, etc., and it should be designed to allow for a prompt recovery from damages.",

      faq_legal_a2_5:
        "Under Section 3.3 Ensuring the Safety of Water Supply Facilities,",

      faq_legal_a2_6:
        "When designing, the following items must be considered to ensure the maximum safety of water supply facilities:",

      faq_legal_a2_7:
        "(1) Ensure the safety of the facility against disasters or accidents, especially in anticipation of accidents related to underground burial, by installing sensor-based diagnostic equipment or safety inspection facilities that can prevent or mitigate pipeline accidents due to ground subsidence or conduct artificial construction without damage in advance.",

      faq_legal_a2_8: "Water Supply Facility Design Standards",

      faq_legal_a2_9:
        "2. Water Pipes, According to 2.23 (Pipeline Protection and Diagnostic Equipment),",

      faq_legal_a2_10:
        "The protection and diagnostic equipment for water supply pipelines can be installed according to the following items:",

      faq_legal_a2_11:
        "(1) Sensors and measuring instruments to prevent and monitor damage, leaks, ground subsidence, etc., of water supply pipelines can be installed around the pipeline.",

      faq_legal_a2_12:
        "(2) Adequate measures must be established to ensure the safety of the facility in preparation for disasters or accidents.",

      faq_legal_a2_13:
        "Our solution detects leaks in real-time and prevents ground subsidence in advance, providing a system that can respond promptly to natural disasters or accidents.",

      faq_legal_q3:
        "Sewer-Related Regulations: Can Cowithone's Solution be Applied to Sewer Systems?",

      faq_legal_a3_1:
        "In the Sewer Standard Specification (2017) Maintenance Monitoring System 1.1.2 System Overview,",

      faq_legal_a3_2:
        "The maintenance monitoring system measures and monitors real-time information from flow meters and rainfall gauges installed in sewer pipelines. This information is collected along with input data such as water quality and water usage and stored in the server at the sewage treatment plant management center. This creates a systematic monitoring system for sewer pipelines that allows for the analysis of various data. Additionally, sensors and measuring instruments can be installed around the pipeline, especially in pressure sections of sewer pipes, to prevent and monitor damage, leaks, ground subsidence, etc., in advance. Adequate measures must also be established to ensure the safety of the facility in preparation for disasters or accidents.",

      faq_legal_a3_3:
        "Our system can detect pipeline damage prevention and ground subsidence in real-time, allowing for the safe management of facilities.",

      faq_legal_q4:
        "Infrastructure Management Regulations: How Can Cowithone's Solution be Applied?",

      faq_legal_a4_1:
        "The Infrastructure Management Act aims to contribute to the nation's economic development by systematically maintaining and improving infrastructure, ensuring the safety and convenience of citizens in utilizing infrastructure.",

      faq_legal_a4_2: "According to Article 3 (Basic Principles),",

      faq_legal_a4_3:
        "1. The responsible entity, by proactively considering the safety, usability, durability, and other factors of infrastructure, minimizes life cycle costs due to aging.",

      faq_legal_a4_4:
        "According to Article 5 (Duties of the State and Others),",

      faq_legal_a4_5:
        "① The state and local governments shall establish and implement comprehensive measures necessary to promote the safe and convenient use of infrastructure for the benefit of the people.",

      faq_legal_a4_6:
        "② The state and local governments shall secure the budget necessary for the maintenance and improvement of infrastructure, and shall reflect it in the medium-term financial plan.",

      faq_legal_a4_7:
        "③ The management entity shall actively cooperate with the policies of the state and local governments, and shall secure the resources necessary for the maintenance and improvement of infrastructure.",

      faq_legal_a4_8: "According to Article 21 (Support for Costs),",

      faq_legal_a4_9:
        "① The state and local governments may contribute, participate, support, and lend all or part of the costs required for systematic maintenance and performance improvement of infrastructure to local governments, public agencies, local public enterprises, and private managers in accordance with the relevant laws and presidential decrees related to infrastructure, as prescribed by each of the following subparagraphs. However, support for private managers may be limited to lending.",

      faq_legal_a4_10:
        "② When local governments, public agencies, local public enterprises, and private managers request financial support, the state and local governments may consider the following items when providing support. (Omitted)",

      faq_legal_a4_11:
        "- Our system, through preventive management such as damage prevention, cost recovery from responsible parties, and extending the lifespan, can reduce the life cycle cost by more than 50% compared to traditional methods, and financial support can also be obtained.",

      faq_legal_q5:
        "Subterranean Safety Regulations: How Can Cowithone's Solution be Applied?",

      faq_legal_a5_1:
        "The Underground Safety Act aims to establish a safety management system for the safe development and use of underground spaces, preventing damage from ground subsidence, and ensuring public safety.",

      faq_legal_a5_2:
        "According to Article 3 (Duties of the State and Others),",

      faq_legal_a5_3:
        "① The state and local governments must establish and implement comprehensive policies for preventing subsidence and managing underground safety to protect the lives, bodies, and property of the people.",

      faq_legal_a5_4:
        "② Managers of underground facilities must establish safety inspection and maintenance regulations for their respective underground facilities and the surrounding ground to prevent subsidence caused by inadequate management. These regulations must be submitted to the mayor, county governor, or district mayor in charge. The same applies if there are changes to these regulations.",

      faq_legal_a5_5:
        "Article 10 (Safety Management of Underground Development Operators and Underground Facility Managers) states that,",

      faq_legal_a5_6:
        "② Underground facility managers must establish safety inspection and maintenance regulations for the underground facilities and surrounding ground to prevent ground subsidence due to inadequate management of the relevant underground facilities. These regulations should be submitted to the competent mayor, county executive, or district office head. The same applies when making changes to these regulations.",

      faq_legal_a5_7:
        "③ If the mayor, county executive, or district office head deems it necessary for the prevention of ground subsidence, they may issue an order to modify the construction safety management plan or safety management regulations. In such cases, the recipient of the modification order must comply unless they have a valid reason not to do so.",

      faq_legal_a5_8:
        "According to Article 34 (Safety Inspection of Underground Facilities and Surrounding Ground),",

      faq_legal_a5_9:
        "① Underground facility managers must regularly conduct safety inspections of their respective underground facilities and surrounding ground in accordance with the safety regulations as prescribed by the Ministry of Land, Infrastructure and Transport, and report the results to the Mayor, County Governor, and District Office Head.",

      faq_legal_a5_10:
        "② Mayors, county governors, and district office heads must conduct safety management checks on underground facilities and surrounding ground in their respective jurisdictions at least once a year. However, if it is determined, based on the safety inspection results received according to Paragraph 1, that there are no concerns about ground subsidence, it may be omitted.",

      faq_legal_a5_11:
        "- Our system enables real-time monitoring of underground facilities, allowing us to verify leaks and ground subsidence in real-time. This extends the safety inspection intervals, reducing inspection costs.",

      faq_legal_q6:
        "Serious Accidents Penalty Act: How Can Cowithone's Solution be Applied?",

      faq_legal_a6_1:
        "The Major Accidents Punishment Act aims to prevent major accidents and protect the lives and bodies of citizens and workers by stipulating the punishment of business owners, management executives, public officials, and corporations who violate their obligations regarding safety and health measures while operating businesses, public facilities, and public transportation, or while handling hazardous materials or products harmful to human health.",

      faq_legal_a6_2:
        "Article 4 (Obligation to Ensure Safety and Health by Employers and Management Executives, etc.) Employers or management executives, etc., shall take the following measures, considering the characteristics and scale of the business or workplace, to prevent harm or risks to the safety and health of workers in the business or workplace that is effectively controlled, operated, or managed by employers, corporations, or institutions:",

      faq_legal_a6_3:
        "1. Measures related to the establishment of a safety and health management system, including the allocation of necessary personnel, budget, etc., for accident prevention.",

      faq_legal_a6_4:
        "2. Measures related to the development and implementation of measures to prevent the recurrence of accidents in the event of an accident.",

      faq_legal_a6_5:
        "3. Measures related to compliance with improvements, corrections, or actions mandated by central government agencies or local governments in accordance with relevant laws and regulations.",

      faq_legal_a6_6:
        "Article 6 (Punishment of Business Owners and Responsible Executives for Major Industrial Accidents)",

      faq_legal_a6_7:
        "① Business owners or responsible executives who are responsible for a major industrial accident shall be punished with imprisonment for more than one year or a fine of up to 1 billion won. In this case, both imprisonment and a fine may be imposed.",

      faq_legal_a6_8:
        "Article 9 (Obligation of Employers and Management Executives to Ensure Safety and Health)",
      faq_legal_a6_9:
        "① Employers or management executives shall take measures as follows to ensure the safety and health of individuals, including users of products manufactured, designed, produced, or distributed in businesses or workplaces that are effectively controlled, operated, or managed by employers, corporations, or institutions:",
      faq_legal_a6_10:
        "1. Measures to establish and implement a safety and health management system, including the allocation of necessary manpower, budget, and inspections for accident prevention.",
      faq_legal_a6_11:
        "2. Measures for establishing and implementing plans to prevent recurrences in the event of accidents.",
      faq_legal_a6_12:
        "Article 11 (Dual Punishment Provisions for Serious Civilian Disasters)",
      faq_legal_a6_13:
        "In addition to imposing penalties on the individual responsible for the violation under Article 10, the corporation or institution's management executive, and others who have committed violations as defined in Article 10 in relation to the corporation or institution's business, shall also be subject to fines according to the following categories. However, if the corporation or institution can prove that they have not been negligent in exercising due care and supervision in order to prevent the violation, then this provision shall not apply",
      faq_legal_a6_14:
        "Our system is a real-time management system for underground facilities, and it is designed to prevent safety accidents. However, even if a safety accident were to occur, it is believed that we can prove that we have not been negligent in exercising due care and supervision for the prevention of safety accidents",
      faq_other_q1:
        "What is the scoring system when using the Cowithone solution?",
      faq_other_a1:
        "According to the Ministry of Land, Infrastructure and Transport press release dated July 20, 2022, to promote smart construction, a minimum score for smart technology (7 points) will be introduced in technical-type bidding reviews such as turnkey projects. Smart technology applications as a bidding condition in smart turnkey projects will be assigned 10 to 20 points. Smart technology should be reflected in non-turnkey projects from the design stage, and 'smart technology' will be newly added as an evaluation item in the engineering court of final judgment. Our system has been adopted in government-approved smart city pilot areas, including the Busan EDC site and Sejong City 5-1 district, and it is considered a recognized smart technology by the government. When incorporating our system into the design, it can earn additional points",
      faq_other_q2:
        "What is the likelihood of winning a project when incorporating the Cowithone solution into the design?",
      faq_other_a2:
        "Our system is currently being implemented in various projects, including the 3rd New Town, new development zones, industrial complexes, and redevelopment projects. When our system is incorporated into the design, it significantly influences the smart technology score, which can lead to a higher chance of winning the project",

      // contact
      contact_title1: "Any questions about Cowithone?",
      contact_title2: "Contact us anytime!",
      contact_email: "E-mail",
      contact_tel: "Tel",
      contact_tel_d: "+82 31-212-5565",
      contact_fax: "Fax",
      contact_fax_d: "+82 31-8014-5929",
      contact_addr: "Address",
      contact_addr_d1: "Ace Gwanggyo Tower 207 (Daehak 4ro 17, ",
      contact_addr_d2: "Youngtong-gu, Suwon-si, Gyeonggi-do)",
    },
  },
  ko: {
    translation: {
      // header
      header_about: "About",
      header_solution: "솔루션",
      header_result: "실적",
      header_faq: "자주묻는질문",
      header_contact: "문의하기",
      // footer
      footer_company: "(주) 코위드원 ",
      footer_ceo: "| 대표이사 윤상조",
      footer_businessnumber: "사업자등록번호 : 135-86-15365",
      footer_addr: "수원시 영통구 대학4로17, 에이스 광교타워 207호",
      footer_customercenter: "고객센터",
      footer_tel: "전화 : 031-212-5565",
      footer_email: "이메일 : help@cowithone.com",

      // home
      home_title1: "IoT 기술로",
      home_title2: "지하시설물 관리를 혁신합니다",
      home_s2_title1: "다양한 센서 및 IoT 기기를 활용하여,",
      home_s2_title2: "지하시설물의 다양한 이벤트를 실시간 모니터링 합니다.",
      home_s2_sts_description1: "연 평균 지반침하(싱크홀) 약 260건 발생.",
      home_s2_sts_description2: "초기에 감지하여 대형재난을 막을 수 있습니다.",
      home_s2_psps_description1: "실시간 누수 및 누수 위치 확인.",
      home_s2_psps_description2: "상하수도관을 완벽하게 관리할 수 있습니다.",
      home_s2_morebtn: "솔루션 자세히보기",
      home_s3_customer: "주요고객",
      home_s3_customer_d1: "각기 다른 이유로",
      home_s3_customer_d2: "저희 솔루션을 사용중입니다",
      home_s3_engineer: "엔지니어링사 & 건설사",
      home_s3_engineer_r1: "낙찰(수주) 확률 UP",
      home_s3_engineer_r1_d1: "턴키 & 비턴키 사업 설계 배점 강화",
      home_s3_engineer_r2: "턴키 등 사업",
      home_s3_engineer_r2_d1: "- 기술형 입찰심의 : 최소배점도입(7점)",
      home_s3_engineer_r2_d2: "- 스마트턴키 : 10~20점 배점",
      home_s3_engineer_r3: "비턴키 사업",
      home_s3_engineer_r3_d1: "- 엔지니어링 종심제 평가항목에",
      home_s3_engineer_r3_d2: "'스마트 기술' 항목 신설",
      home_s3_government: "지자체(상하수도부서, 도로과)",
      home_s3_government_r1: "유지 비용 절감",
      home_s3_government_r1_d1: "- 순회 비용 절감",
      home_s3_government_r1_d2: "- 복구비 원인자 부담",
      home_s3_government_r1_d3: "- (상수도) 누수 피해액 절감",
      home_s3_government_r1_d4: "- (하수도) 불명수 처리비용 절감",
      home_s3_government_r1_d5: "- 상하수도관 수명 연장 (약 150%)",
      home_s3_publicinstitutions: "공공기관",
      home_s3_publicinstitutions_r1: "택지개발사업",
      home_s3_publicinstitutions_r1_d1: "- 스마트도시를 위한 최고의 솔루션",
      home_s3_publicinstitutions_r1_d2: "- 국가 스마트도시 시범사업 100% 선정",
      home_s3_publicinstitutions_r1_d3: "(부산에코델타시티, 세종5-1공구)",
      home_s3_publicinstitutions_r2: "광역상수도 (수자원공사)",
      home_s3_publicinstitutions_r2_d1:
        "- 광역상수도 관리를 위한 최고의 솔루션",
      home_s3_publicinstitutions_r2_d2: "- 정확한 위치 탐사",
      home_s3_publicinstitutions_r2_d3: "- 관 파손 예방",
      home_s3_publicinstitutions_r2_d4: "- 신속한 누수 탐지",
      home_s4_partner: "전국 다양한 기관 및 업체에서 사용중입니다.",
      home_s6_q1: "시스템 구축비용이 많이 들지 않나요?",
      home_s6_a1:
        "시스템 구축비용은 BPS시스템, STS시스템, PSPS시스템 등 시스템 구축방법에 따라 많은 차이가 있습니다. 현재 상하수도 표준공사비를 기준할 때 약 3~8%가 증가될 것으로 예상됩니다. 소형관은 비율이 높고 대형관이 비율이 낮습니다. 다만, 본 시스템을 구축하면 자기마커설치가 불필요하며 별도로 GIS시스템을 구축할 필요가 없기 때문에 실제 비용상승은 크지 않습니다",
      home_s6_q2:
        "스마트 예방시트, 누수감지센서 등 제품의 수명은 얼마나 되나요?",
      home_s6_a2:
        "지하에 매설된 감지선 수명은 외부 압력과 지하수에 영향을 받습니다. 당사가 사용하는 감지선은 주석 코팅 동선을 내수성과 내후성이 뛰어난 테프론 코팅 후 그 위에 PVC로 코팅하여 사용합니다. 이 감지선을 부틸고무가 부착된 시트에 삽입하여 사용하기 때문에 반영구적으로 사용할 수 있습니다. 누수감지센서는 보호커버(또는 센서보호장치)에 내장되어 사용되기 때문에 반영구적으로 사용할 수 있습니다.",
      home_s6_q3: "코위드원 솔루션 사용시 해당하는 가점은 어떻게 되나요?",
      home_s6_a3:
        "2022년 7월 20일 국토부 보도자료에 따르면, 스마트건설 활성화를 위해 턴키 등 기술형 입찰 심의 시, 스마트 기술에 관한 최소 배점을 도입(7점)하고, 스마트 기술 적용이 입찰 조건인 스마트 턴키는 10~20점 배정, 비턴키 사업에도 설계 단계부터 스마트 기술이 반영되도록 엔지니어링 종심제 평가 항목에 “스마트 기술”을 신설하는 것으로 되어 있습니다. 당사 시스템은 정부 스마트시티 시범지구인 부산EDC현장과 세종시 5-1공구에 채택되어 시공 중이며, 정부가 인정하는 스마트 기술로 당사 시스템을 설계반영 시 가점을 받을 수 있습니다.",
      home_s6_morebtn: "자주묻는질문 더보기",
      home_s7_title: "코위드원 솔루션을 더 알고 싶다면?",
      home_s7_subtitle: "최대한 빠르게 확인 후 연락드리겠습니다",
      home_s7_btn: "문의하기",

      // About
      about_s1_title1: "코위드원은 지하시설물의",
      about_s1_title2: "다양한 문제를 해결하고 있습니다",
      about_s1_subtitle1: "이벤트 발견은 가장 빠르게!",
      about_s1_subtitle2: "이벤트 위치는 가장 정확하게!",
      about_s1_d1: "지하시설물 유지관리의 기본",
      about_s1_d1_1: "관로탐사",
      about_s1_d1_2: "(정확한 위치파악)",
      about_s1_d2: "지하시설물 유지관리의 핵심",
      about_s1_d2_1: "관파손(무단굴착)",
      about_s1_d2_2: "예방",
      about_s1_d3: "대형재난 예방",
      about_s1_d3_1: "지하공동(싱크홀)",
      about_s1_d3_2: "조기발견",
      about_s1_d4: "한 방울의 물도 소중하게",
      about_s1_d4_1: "누수감지",
      about_s1_d4_2: "시스템",

      about_s2_d1: "관로 탐사 (정확한 위치 파악)",
      about_s2_d1_1: "지하 안전 사고에 신속 정확하게 대응하기 위해",
      about_s2_d1_2: "관로탐사 정확도 확보는 매우 중요합니다",

      about_s2_t_r1_1: "구분",
      about_s2_t_r1_2: "자사 방식",
      about_s2_t_r1_3: "자기마커 방식",
      about_s2_t_r1_4: "GPR 방식",

      about_s2_t_r2_1: "원리",
      about_s2_t_r2_2: "스마트예방시트 설치",
      about_s2_t_r2_21: "(RS485 통신)",
      about_s2_t_r2_3: "자기마커 설치",
      about_s2_t_r2_4: "GPR(지표투과레이다) 이용",

      about_s2_t_r3_1: "탐사방법",
      about_s2_t_r3_11: "탐사",
      about_s2_t_r3_12: "방법",
      about_s2_t_r3_21: "- 감지장치로 실시간 모니터링",
      about_s2_t_r3_22: "- UT-9000으로 탐사",
      about_s2_t_r3_23: "(감지장치 미설치시)",
      about_s2_t_r3_3: "자기탐지기로 탐사",
      about_s2_t_r3_4: "GPR 장치로 탐사",

      about_s2_t_r4_1: "확인 심도",
      about_s2_t_r4_11: "확인",
      about_s2_t_r4_12: "심도",
      about_s2_t_r4_2: "약 10m",
      about_s2_t_r4_3: "약 3m",
      about_s2_t_r4_4: "약 2m",

      about_s2_t_r5_1: "장점",
      about_s2_t_r5_21: "- 가장 깊은 심도(10m)",
      about_s2_t_r5_22: "- 실시간 확인 가능",
      about_s2_t_r5_23: "- 관파손예방 가능",
      about_s2_t_r5_24: "- 망실 확률 낮음",
      about_s2_t_r5_3: "가장 저렴",
      about_s2_t_r5_4: "기존 노후관도 탐지 가능",

      about_s2_t_r6_1: "단점",
      about_s2_t_r6_21: "- 감지장치 설치시 초기투자 발생",
      about_s2_t_r6_22: "- 기존 노후관 탐지 곤란",
      about_s2_t_r6_31: "- 망실 및 이동시 오탐",
      about_s2_t_r6_32: "- 낮은 심도(3m)",
      about_s2_t_r6_33: "- 기존 노후관 탐지 곤란",
      about_s2_t_r6_41: "- 탐지비용 비쌈",
      about_s2_t_r6_42: "- 낮은 심도(2m)",

      about_s3_d1: "관 파손(무단 굴착) 예방",
      about_s3_d1_1: "관손상 원인의 70% 이상이 타공사 굴착.",
      about_s3_d1_2: "특히 무단 굴착을 막기 위해 부단히 노력중입니다.",
      about_s3_t_r1_3: "보호철판",
      about_s3_t_r1_4: "순회점검",
      about_s3_t_r2_21: "스마트예방시트를 통한 ",
      about_s3_t_r2_22: "24시간 실시간 모니터링",
      about_s3_t_r2_3: "관 위에 보호철판 설치",
      about_s3_t_r2_4: "관리자가 직접 현장 방문",
      about_s3_t_r3_1: "모니터링",
      about_s3_t_r4_21: "- 24시간 실시간 모니터링",
      about_s3_t_r4_22: "- 시설물 파손 예방",
      about_s3_t_r4_23: "- 이벤트 발생시 신속 정확한 위치 정보 제공",
      about_s3_t_r4_3: "관 파손을 막는 가장 안전한 방법",
      about_s3_t_r4_4: "기존 시설물 적용 가능",
      about_s3_t_r5_21: "- 초기투자 발생",
      about_s3_t_r5_22: "- 기존 시설물 적용 곤란",
      about_s3_t_r5_33: "- 천공기 예방 불가",
      about_s3_t_r5_41: "- 정기적(1일 2회) 운영으로 예방에 제한적 기능",
      about_s3_t_r5_42: "- 관리자 유지관리비",
      about_s3_d2_1: "파손 예방 효과 ",
      about_s3_d2_2: "혁신적인 유지 비용 절감",
      about_s3_d3: "관리자 순회비용 절감",
      about_s3_d3_1:
        "현장 방문 없이, PC에서 실시간으로 현재 관상태를 모니터링.",
      about_s3_d3_2: "굴착사고시 관리자에게 실시간 알람.",
      about_s3_d4: "원인제공자에게 비용 청구 가능",
      about_s3_d4_1: "작은 사고(크랙)는 당시에는 피해가 없어보이나",
      about_s3_d4_2:
        "수년내에 부식을 유발하여 누수 및 지반침하(싱크홀)의 원인이 됨",
      about_s3_d5: "관 수명 연장 효과",
      about_s3_d5_1: "기존 40년의 관 수명을 60년으로 150% 수명 연장 효과.",
      about_s3_d5_2: "관 비용이 100억인 경우 50억 절감 효과",

      about_s4_d1: "지하공동(싱크홀) 조기발견",
      about_s4_d1_1:
        "지반침하 연 평균 257건, 지반침하(싱크홀, 땅꺼짐)는 우리 가까이에 있습니다",
      about_s4_t_r2: "싱크볼 설치 (물리적 센서로 초기 지반침하 발견)",
      about_s4_t_r21: "싱크볼 설치",
      about_s4_t_r22: "(물리적 센서로 초기 지반침하 발견)",
      about_s4_t_r5_33: "- 5년에 한 번 탐사",
      about_s3_d2: "독보적인 기술력",
      about_s4_d3: "실시간 모니터링",
      about_s4_d3_1:
        "GPR 방식은 5년에 1회 탐사 → 그 사이에 생기는 공동은 감지 불가.",
      about_s4_d3_2: "반면, 자사 시스템은 24시간 실시간 모니터링 제공.",
      about_s4_d4: "현장탐사 불필요",
      about_s4_d4_1: "GPR 방식은 숙련된 전문가와 고가의 장비를 이용하는",
      about_s4_d4_2: "현장탐사가 필수이며 고가의 탐지 비용",
      about_s4_d5: "가장 빠른 지반 침하 위치 탐색",
      about_s4_d5_1:
        "자사 시스템은 현장탐사 없이, 실시간으로 공동을 지도상 표출",
      about_s4_d5_2: "오차율 3% 이내 (최대 45m)",

      about_s5_d1: "누수 감지 시스템",
      about_s5_d1_1: "누수로 새는 돈 연간 6,000억 원",
      about_s5_t_r1_3: "음향계 방식",
      about_s5_t_r1_4: "유량계(수압계) 방식",
      about_s5_t_r2_2: "물리적 센서로 이음부 누수 감지",
      about_s5_t_r2_3: "음파를 분석하여 누수여부 판단",
      about_s5_t_r2_4: "유량(수압)을 분석하여 누수여부 판단",
      about_s5_t_r3_11: "누수감지",
      about_s5_t_r3_12: "정확도",
      about_s5_t_r4_12: "시간",
      about_s5_t_r4_2: "실시간",
      about_s5_t_r4_3: "15일 이상",
      about_s5_t_r5_11: "누수위치",
      about_s5_t_r5_2: "3% 오차범위 (최대 50m)",
      about_s5_t_r5_31: "블록별 탐지 (최소 10km 이상)",
      about_s5_t_r5_32: "현장에서 추가 탐지 필요",
      about_s5_t_r6_21: "- 1분 이내 누수감지",
      about_s5_t_r6_22: "- 이벤트 위치 3% 이내 확인",
      about_s5_t_r6_23: "- 상수도뿐만 아니라 하수도 누수 감지",
      about_s5_t_r6_3: "기존 노후관에 적용하기에 용이",
      about_s5_t_r7_31: "- 잘못된 누수 판단으로 낭비되는 현장 방문 비용",
      about_s5_t_r7_32: "- 저압 누수, 소량 누수 탐지 불가",
      about_s5_t_r7_33: "- 누수 판단에 15일 이상 소요",
      about_s5_t_r7_34: "(누수 비용 과다 발생)",
      about_s5_t_r7_35: "- 누수위치 현장에서 추가 탐지",
      about_s5_t_r7_36: "(누수비용 과다 발생 및 전문인력비용 발생)",
      about_s5_d2: "기존 기술 대비 더 나은 기술력",
      about_s5_d3: "누수 인식률 100%",
      about_s5_d3_1: "이음부에서 센서로 직접 확인하는 방식으로 인식률 100%",
      about_s5_d3_2: "기존 방식 : 음향계, 유량계를 사용하는 간접 확인 방식",
      about_s5_d4: "신속한 누수 감지 시간",
      about_s5_d4_1: "실시간 누수를 탐지하여, 누수 비용 과다 발생을 예방",
      about_s5_d4_2:
        "기존 방식 : 누수 의심지역을 약 15일동안 분석하여 누수 여부 판단",
      about_s5_d5: "정확한 누수 위치 탐색",
      about_s5_d5_1: "오차율 3%내 누수 위치 지도상 표출",
      about_s5_d5_2: "기존 방식 : 누수 의심지역을(약 10km) 현장에 방문하여",
      about_s5_d5_3:
        "전문인력이 직접 누수탐지 장비로 위치 파악 (누수 비용 과다 발생)",

      about_s6_title: "기타 다양한 기능들",
      about_s6_subtitle1: "위의 기능 이외에,",
      about_s6_subtitle2: "다양한 기능으로 지하시설물을 관리합니다",
      about_s6_d1: "자산 관리 기능",
      about_s6_d1_1: "시공단계부터 자산 및 시공 이력을 관리합니다",
      about_s6_d1_2:
        "관리자는 별도의 관리 없이, 지하시설물 자산 관리 및 시공 이력을 편하게 확인",
      about_s6_d1_tag1: "관로 위치 확인",
      about_s6_d1_tag2: "GIS 구축",
      about_s6_d1_tag3: "시공 이력 관리",
      about_s6_d1_tag4: "유지보수 이력관리",

      about_s6_d2: "방식 전위 체크",
      about_s6_d2_1: "코팅강관 외면 부식여부를 현장 출동없이 실시간 확인 가능",
      about_s6_d2_tag1: "전기방식",
      about_s6_d2_tag2: "코팅강관",
      about_s6_d2_tag3: "가스관",

      about_s8_title: "끝으로",
      about_s8_subtitle1: "지하시설물 유지관리 정책 방향은",
      about_s8_subtitle2:
        "사후 대응 방식에서 선제적 관리로 변화를 요구하고 있습니다.",

      // solution
      solution_s1_title: "지하시설물 실시간 모니터링 시스템",
      solution_s3_bps_title: "BPS (파손 예방 시스템)",
      solution_s3_bps_subtitle: "비용은 저렴한지만 성능은 최고 (BEST)",
      solution_s3_bps_description1:
        "- 관 파손 예방만으로도 지하시설물 문제의 80%를 사전 예방",
      solution_s3_bps_description2: "- 시공 및 유지보수 간편",
      solution_s3_bps_components: "구성품 : RM-5000, RM-4000, 스마트 예방시트",
      solution_s3_sts_title: "STS (파손 예방 및 지반침하 예방 시스템)",
      solution_s3_sts_subtitle: "예방에 안전을 더했습니다",
      solution_s3_sts_description: "- 목숨보다 소중한 것은 없습니다",
      solution_s3_sts_components: "   싱크볼",
      solution_s3_psps_title: "PSPS (파손 예방 및 누수 감지 시스템)",
      solution_s3_psps_subtitle: "이보다 완벽할 순 없다",
      solution_s3_psps_description1: "- 상수도를 가장 완벽하게 사용하는 방법",
      solution_s3_psps_description2:
        "- 예방, 안전, 그리고 유지관리비를 최소화할 수 있습니다",
      solution_s3_psps_components: " 스마트시트,  누수센서 및 보호커버",
      solution_s4_title: "우리 회사에 알맞는 솔루션은?",
      solution_s4_subtitle:
        "관 종류, 예산, 필요 기능에 맞춰 솔루션을 선택해 보세요",
      solution_s4_btn: "제품 카탈로그 다운로드",
      solution_s4_table_summary: "요약",
      solution_s4_table_prevent: "관 파손 예방",
      solution_s4_table_detect_sinkhall: "초기 지반 침하 감지",
      solution_s4_table_prevent_sinkhall: "지반 침하 예방",
      solution_s4_table_detect_water: "누수 감지",
      solution_s4_table_components: "제품구성",
      solution_s4_table_detector: "이벤트 감지장치",
      solution_s4_table_preventsheet: "스마트 예방시트",
      solution_s4_table_sinkball: "싱크볼",
      solution_s4_table_smartsheet: "스마트시트",
      solution_s4_table_watersensor: "누수감지센서",
      solution_s4_table_cover: "및 보호커버",
      solution_s4_table_corrosion: "방식전위",
      solution_s4_table_cathodic: "(전기 방식)",
      solution_s4_table_corrosion_description1: "솔루션에 관계 없이",
      solution_s4_table_corrosion_description2: "코팅관에 도입 가능",
      solution_s4_table_waterpipe: "상수도관",
      solution_s4_table_sewagepipe: "오수관",
      solution_s4_table_stormdrain: "우수관",
      solution_s4_table_wastewaterpipe: "중수도관",
      solution_s4_table_gaspipe: "가스관",
      solution_s4_table_heatingpipe: "난방관",
      solution_s4_table_oilpipeline: "송유관",
      solution_s4_table_powerpipe: "전력관",
      solution_s4_table_etc: "기타",
      solution_s5_title: "구성품",
      solution_s5_detector: "감지장치",
      solution_s5_detector_description1:
        "이벤트를 감지하고 데이터를 서버에 전송",
      solution_s5_detector_description2: "(외부 전원 사용)",
      solution_s5_detector_description3:
        "지하시설물의 이벤트(파손,누수,지반침하)를 감지",
      solution_s5_detector_description4: "(태양광 사용)",
      solution_s5_preventsheet_description1: "매설관 30~50cm 위에 설치하며,",
      solution_s5_preventsheet_description2: "지하시설물의 파손을 예방",
      solution_s5_sinkball_description1: "초기 지반침하를 감지하여,",
      solution_s5_sinkball_description2: "대형재난을 사전에 예방",
      solution_s5_smartsheet_description1: "관 외면에 부착하여",
      solution_s5_smartsheet_description2: "누수센서와 감지장치를 연결",
      solution_s5_leaksensor_description: "이음부에서 발생하는 누수를 감지",

      //result
      result_s1_title1: "이미 많은 곳에서",
      result_s1_title2: "코위드원 솔루션을 이용중입니다",

      result_s2_title: "납품실적",
      result_s2_subtitle1: "택지개발(상하수도) 뿐만 아니라,",
      result_s2_subtitle2:
        "광역상수도 / 공업용수 / 농업용수 / 해수취수관 / 하천유지용수 등",
      result_s2_subtitle3: "다양한 분야에서 실적을 쌓았습니다.",
      result_s2_t_r1_1: "고객",
      result_s2_t_r1_2: "납품 현장",
      result_s2_t_r1_3: "지하매설관",
      result_s2_t_r1_4: "적용솔루션",
      result_s2_t_cli_1: "한국수자원공사",
      result_s2_t_cli_2: "한국농어촌공사",
      result_s2_t_cli_3: "한국수력원자력",
      result_s2_t_cli_4: "남양주시",
      result_s2_t_cli_5: "송파구청",
      result_s2_t_cli_6: "한국토지주택공사(LH)",
      result_s2_t_site_1: "화성 송산 그린시티",
      result_s2_t_site_2: "부산 에코델타시티 2-4 공구",
      result_s2_t_site_3: "부산 에코델타시티 2-5 공구	",
      result_s2_t_site_4: "수원 삼성전자",
      result_s2_t_site_5: "보령/부여 관로 이설",
      result_s2_t_site_6: "시흥 광역상수도",
      result_s2_t_site_7: "인천 검단지구",
      result_s2_t_site_8: "수원 이목지구",
      result_s2_t_site_9: "울진 원자력발전소",
      result_s2_t_site_10: "남양주 조안면",
      result_s2_t_site_11: "송파구",
      result_s2_t_site_12: "성남 고등지구",
      result_s2_t_water: "상수도",
      result_s2_t_water2: "상수도, 하수도",
      result_s2_t_ind_water: "공업용수",
      result_s2_t_agri_water: "농업용수",
      result_s2_t_metro_water: "광역상수도",
      result_s2_t_seawater: "해수취수관",
      result_s2_t_sewage_pressure: "하수압송관",
      result_s2_t_sewage_pressure2: "오수압송관",
      result_s2_t_river_water: "하천유지용수",
      result_s2_t_bps: "BPS (파손 예방 시스템)",
      result_s2_t_sts: "STS (파손 예방 및 지반 침하 예방 시스템)",
      result_s2_t_psps: "PSPS (파손 예방 및 누수감지 시스템)",
      result_s2_t_lss: "LSS (누수감지 시스템)",
      result_s3_title: "파트너",
      result_s3_subtitle: "다양한 파트너들과 협력하고 있습니다",
      result_s3_c1: "지자체",
      result_s3_c2: "공공기관",
      result_s3_c3: "건설사",
      result_s3_c4: "엔지니어링",
      result_s3_c5: "협력업체",

      result_s4_title: "특허 실적",
      result_s4_patent: "특허",
      result_s4_patent_sub: "특허 19건, 실용실안 1건, 디자인등록 2건",

      result_s4_patent_t_r1_2: "특허등록번호",
      result_s4_patent_t_r1_3: "특허명",

      result_s4_patent_t_r2_1: "특허",
      result_s4_patent_t_r2_2: "제 10-0869052호",
      result_s4_patent_t_r2_3:
        "배관재의 누수와 파손감지 및 관로 위치확인이 용이한 감지관",

      result_s4_patent_t_r3_2: "제 10-0908137호",
      result_s4_patent_t_r3_3: "배관재 연결부 감지장치",

      result_s4_patent_t_r4_2: "제 10-0927464호",
      result_s4_patent_t_r4_3: "배관재 연결부 감지장치",

      result_s4_patent_t_r5_2: "제 10-1103310호",
      result_s4_patent_t_r5_3: "손상감지 테이프가 구비된 매설관 관리시스템",

      result_s4_patent_t_r6_2: "제 10-1173592호",
      result_s4_patent_t_r6_3:
        "매설관의 파손방지와 파손된 위치를 확인하는 시스템 및 그 운영방법",

      result_s4_patent_t_r7_2: "제 10-1281507호",
      result_s4_patent_t_r7_3: "배관 연결부의 부식방지용 튜브",

      result_s4_patent_t_r8_2: "제 10-1281508호",
      result_s4_patent_t_r8_3: "관 이음장치",

      result_s4_patent_t_r9_2: "제 10-1412605호",
      result_s4_patent_t_r9_3: "관 이음장치",

      result_s4_patent_t_r10_2: "제 10-1575739호",
      result_s4_patent_t_r10_3: "지하매설물 관리시스템 및 방법",

      result_s4_patent_t_r11_2: "제 10-1690542호",
      result_s4_patent_t_r11_3:
        "누수감지장치 그것의 제조방법, 그에 적합한 체결장치 그리고 이를 적용한 누수감지시스템",

      result_s4_patent_t_r12_2: "제 10-1898447호",
      result_s4_patent_t_r12_3: "누수 감지시트 및 그를 이용한 누수감지장치",

      result_s4_patent_t_r13_2: "제 10-0908137호",
      result_s4_patent_t_r13_3: "동공감지센서",

      result_s4_patent_t_r14_2: "제 10-1971473호",
      result_s4_patent_t_r14_3:
        "관이음부 결함감지 센서 및 이를 이용한 결함감지시스템",

      result_s4_patent_t_r15_2: "제 10-2052343호",
      result_s4_patent_t_r15_3: "누수감지 센서 및 그를 이용한 누수감지시스템",

      result_s4_patent_t_r16_2: "제 10-2052349호",
      result_s4_patent_t_r16_3: "누수감지장치 및 이를 적용한 누수감지시스템",

      result_s4_patent_t_r17_2: "제 10-2120724호",
      result_s4_patent_t_r17_3:
        "감지선시트부착센서 및 감지선부착센서를 관이음부에 부착하는 방법",

      result_s4_patent_t_r18_2: "제 10-2139816호",
      result_s4_patent_t_r18_3: "지하시설물 파손예방시트 및 그의 제조방법",

      result_s4_patent_t_r19_2: "제 10-0908137호",
      result_s4_patent_t_r19_3:
        "UF코드패드부와 지하시설물 측정용 AI로봇모듈을 통한 현장지능형 지하시설물 안전관리장치 및 방법",

      result_s4_patent_t_r20_1: "실용실안",
      result_s4_patent_t_r20_2: "제 20-0471757호",
      result_s4_patent_t_r20_3: "매설관 손상 위치 감지를 위한 감지 테이프",

      result_s4_patent_t_r21_1: "디자인등록",
      result_s4_patent_t_r21_2: "제 30-0703793호",
      result_s4_patent_t_r21_3: "파이프 연결부 누설 감지 보호 커버",

      result_s4_patent_t_r22_2: "제 30-0703793-01호",
      result_s4_patent_t_r22_3: "파이프 연결부 누설 감지 보호 커버",

      result_s4_patentapp: "특허출원",
      result_s4_patentapp_sub: "코위드원은 계속 연구하며 발전하고 있습니다",

      result_s4_patentapp_t_r1_1: "출원일",
      result_s4_patentapp_t_r1_2: "출원번호",
      result_s4_patentapp_t_r1_3: "특허출원명",

      result_s4_patentapp_t_r2_2: "제 2020-0187127호",
      result_s4_patentapp_t_r2_3: "누수감지센서 및 그를 이용한 방법",

      result_s4_patentapp_t_r3_2: "제 2020-0187181호",
      result_s4_patentapp_t_r3_3:
        "누수감지센서 및 이를 삽입하는 센서함체부 및 센서함체부를 삽입하는 보호커버",

      result_s4_patentapp_t_r4_2: "제 2020-0187204호",
      result_s4_patentapp_t_r4_3:
        "누수감지센서 및 센서함체부를 삽입하는 보호커버",

      result_s4_patentapp_t_r5_2: "제 2021-0065020호",
      result_s4_patentapp_t_r5_3: "감지선 손상여부 판단장치",

      result_s4_patentapp_t_r6_2: "제 2021-0120400호",
      result_s4_patentapp_t_r6_3: "감지선 손상여부 판단장치 및 그의 방법",

      result_s5_title: "기타 실적",
      result_s5_subtitle: "수상 및 인증",
      result_s5_subtitle_description:
        "혁신제품 인증 2건 및 대통령상 포함 10건의 수상 실적!",
      result_s5_t_r1_2: "내용",
      result_s5_t_r1_3: "주관기관",
      result_s5_t_certifi: "인증",
      result_s5_t_awards: "수상",

      result_s5_t_r2_2: "혁신제품 (상하수도관로 파손예방 및 누수감지 시스템)",
      result_s5_t_r2_3: "환경부",

      result_s5_t_r3_2:
        "혁신제품 (싱크홀을 예방하는 AR기술을 접목한 SinkTree시스템)",
      result_s5_t_r3_3: "중소벤처기업부",

      // result_s5_t_r4_2: "",
      result_s5_t_r4_3: "한국국제규격인증원",

      // result_s5_t_r5_2: "",
      // result_s5_t_r5_3: "",

      result_s5_t_r6_2: "우수발명품 우선구매선정",
      result_s5_t_r6_3: "한국발명진흥회",

      result_s5_t_r7_2: "특허청 표창장",
      result_s5_t_r7_3: "특허청",

      result_s5_t_r8_2: "한국방재협회 표창장",
      result_s5_t_r8_3: "한국방재협회",

      result_s5_t_r9_2: "대통령상",
      result_s5_t_r9_3: "행정자치부",

      result_s5_t_r10_2: "대한민국 우수특허 대상",
      result_s5_t_r10_3: "한국일보",

      result_s5_t_r11_2: "물관리 녹색기술상",
      result_s5_t_r11_3: "한국환경공단",

      result_s5_t_r12_2: "국민안전처 표창장",
      result_s5_t_r12_3: "국민안전처",

      result_s5_t_r13_2: "스마트시티 비즈니스페어 장관상",
      result_s5_t_r13_3: "국토교통부",

      result_s5_t_r14_2: "경기도 안전산업육성오디션 우수상",
      result_s5_t_r14_3: "경기도",

      result_s5_t_r15_2: "대한민국환경대상",
      result_s5_t_r15_3: "산업통상자원부",

      // contact
      contact_title1: "코위드원에 궁금한 점이 있으면",
      contact_title2: "편하게 연락주세요",
      contact_email: "이메일",
      contact_tel: "전화",
      contact_tel_d: "031-212-5565",
      contact_fax: "팩스",
      contact_fax_d: "031-8014-5929",
      contact_addr: "주소",
      contact_addr_d1: "경기도 수원시 대학4로 17,",
      contact_addr_d2: "에이스광교타워 207호",

      // faq
      faq_title: "자주묻는질문",

      faq_cost: "비용",
      faq_solution: "솔루션",
      faq_legal: "법대응",
      faq_other: "기타",

      faq_cost_q1: "시스템 구축비용이 많이 들지 않나요?",
      faq_cost_a1:
        "시스템 구축비용은 BPS시스템, STS시스템, PSPS시스템 등 시스템 구축방법에 따라 많은 차이가 있습니다. 현재 상하수도 표준공사비를 기준할 때 약 3~8%가 증가될 것으로 예상됩니다. 소형관은 비율이 높고 대형관이 비율이 낮습니다. 다만, 본 시스템을 구축하면 자기마커설치가 불필요하며 별도로 GIS시스템을 구축할 필요가 없기 때문에 실제 비용상승은 크지 않습니다.",
      faq_cost_q2: "시스템 유지관리비용이 많이 들지 않나요?",
      faq_cost_a2:
        "시스템 유지관리비용은 전력비, 통신비, 소모품 교체비입니다. RM-5000은 외부전원을 사용하고, RM-4000은 태양광을 사용하기 때문에 전력비용이 적게 듭니다. 통신비용은 RM-5000에서만 발생하여 년간 전력비와 통신비 합계는 M당 160원입니다. 소모품을 정기적으로 교체하더라도 년 간 M당 2,200원이 넘지 않습니다.",

      faq_solution_q1:
        "스마트 예방시트, 누수감지센서 등 제품의 수명은 얼마나 되나요?",
      faq_solution_a1:
        "지하에 매설된 감지선 수명은 외부 압력과 지하수에 영향을 받습니다. 당사가 사용하는 감지선은 주석 코팅 동선을 내수성과 내후성이 뛰어난 테프론 코팅 후 그 위에 PVC로 코팅하여 사용합니다. 이 감지선을 부틸고무가 부착된 시트에 삽입하여 사용하기 때문에 반영구적으로 사용할 수 있습니다. 누수감지센서는 보호커버(또는 센서보호장치)에 내장되어 사용되기 때문에 반영구적으로 사용할 수 있습니다",

      faq_solution_q2: "원격감시장치의 전원은 어떤 것을 사용하나요?",
      faq_solution_a2:
        "원격감지장치는 외부전원 또는 태양광을 전원으로 사용합니다. 시스템 구성상 1대(RM-5000)만 외부전원을 사용하고, 나머지(RM-4000)는 태양광을 사용합니다",

      faq_solution_q3:
        "태양광을 사용할 경우 배터리 잔량을 확인하기 위해 수시로 현장에 방문해야 하지 않나요?",
      faq_solution_a3:
        "프로그램에서 배터리 잔량을 확인할 수 있어 현장에 방문할 필요가 없습니다.",

      faq_solution_q4:
        "여러 종류의 관이 혼합되어 사용되더라도 하나의 망으로 구성하여 모니터링 할 수 있나요?",
      faq_solution_a4:
        "물론입니다. 여러 종류의 관 종, 관 경을 하나의 망으로 구성하여 효율적으로 관리하는 것이 당사 시스템의 장점입니다. 최소 D80부터 최대 D3,000까지 시스템을 구축할 수 있습니다",

      faq_solution_q5: "감지선 보수가 어렵지 않나요?",
      faq_solution_a5:
        "감지장치에서 미세한 신호를 보내기 때문에 감전 위험이 없으며, 손상된 감지선을 절단한 후 연결잭에 삽입하여 연결한 후 지하수가 유입되지 않도록 보호테이프를 부착하면 됩니다",

      faq_solution_q6:
        "하수관이나 우수관은 주로 비금속관을 사용하고 지하 5m 이하에 매설되는 경우가 많은데 관로탐사가 가능한가요?",
      faq_solution_a6:
        "스마트시트 또는 스마트예방시트에 내장된 감지선을 통해 지하 10m까지 관로 위치를 탐지할 수 있습니다. 따라서 기존의 자기마커나 RF칩 및 로케이팅케이블을 사용하지 않아도 됩니다.",

      faq_solution_q7:
        "시스템을 구축하면 지하시설물 수명을 얼마나 연장할 수 있나요?",
      faq_solution_a7:
        "상수도관 파손 원인에 대한 미국 통계를 보면 타공사 33%, 외부부식 32%, 내부부식 10%로 나타나고 있습니다. 우리나라 환경부 자료를 보면 타공사 10%, 시설노후 87.3%로 나타나고 있습니다. 이런 이유로 약 30년이 경과하면 노후관으로 분류되어 교체 여부를 고민하고 있습니다. 당사 시스템을 적용하면 타공사에 대한 문제점과 이음부 누수에 대한 문제점을 효율적으로 해결할 수 있어 최소 1.5배 이상의 수명을 연장시킬 수 있습니다.",

      faq_solution_q8: "관리자는 어떤 경로로 알람을 받나요?",
      faq_solution_a8:
        "당사는 이음부 누수나 지반침하를 감지하기 위해 이음부에 대한 모든 정보(원격감지장치로부터 감지선 길이, 좌표값, 시설물에 대한 속성정보 등)를 수집하여 DB를 구축하여 서버에 저장해 놓습니다. 그리고 관리자들의 핸드폰 번호를 저장해 놓습니다. 만약 감지선이 절단되거나 누수감지센서(또는 싱크볼)가 작동되면 감지장치가 확인하여 서버로 보내고, 서버는 사전에 구축된 DB와 비교하여 정확한 이벤트 위치를 확인한 후 관리자에게 알립니다",

      faq_legal_q1:
        "스마트 도시법은 무엇이며, 코위드원 솔루션이 어떻게 해결하나요?",
      faq_legal_a1_1:
        "스마트 도시법은 도시의 경쟁력을 향상시키고 지송 가능한 발전을 촉진하여 삶의 질 향상과 경쟁력 강화를 목적으로 제정되었으며, 스마트도시 건설을 함에 있어 공공시설을 지능화하기 위해 건설기술에 전자, 제어, 통신 등의 기술을 융합한 기술을 사용토록 하는 법입니다.",
      faq_legal_a1_2:
        "- 당사 솔루션은 지하에 매설되어 우리에게 편리함을 제공하는 인프라(수도, 하수도, 전기, 통신, 전력, 도시가스, 송유 등)의 안전관리를 위해 시설물 외부 또는 상단에 실시간 모니터링시스템을 설치한 후 정보통신 기술을 이용하여 인프라의 파손 여부 및 누수, 지반침하를 모니터링하여 실시간 감지 및 이벤트 위치를 알려주는 솔루션입니다.",

      faq_legal_q2:
        "상수도설계기준 관련하여 코위드원 솔루션을 어떻게 적용할 수 있나요?",
      faq_legal_a2_1:
        "상수도 설계기준(2017년 판)의 주요 내용은 다음과 같습니다",
      faq_legal_a2_2: "일반사항",
      faq_legal_a2_3: "3. 설계의 기본사항 3.1 총칙 (3)에 의하면,",
      faq_legal_a2_4:
        "지진, 홍수, 태풍, 가뭄 등 자연재해나 사고 등의 비상시라도 가능한 한 단수되지 않아야 하며 피해를 조속히 복구될 수 있도록 하고 있으며,",
      faq_legal_a2_5: "3.3 상수도 시설의 안전성 확보에 의하면,",
      faq_legal_a2_6:
        "설계할 때에는 상수도 시설의 안전성이 최대로 확보되도록 다음 각 항이 고려되어야 한다",
      faq_legal_a2_7:
        "(1) 재해 또는 사고에 대비하여 시설의 안전성이 확보되도록 할 것, 특히. 지반함몰에 따른 관로 사고를 사전에 예방, 저감하기 위한 센서기반의 기술 진단설비나 인위적 공사 시 관 파손을 미연에 예방할 수 있는 안전점검시설 등을 설치할 것.",

      faq_legal_a2_8: "도수시설 설계기준",
      faq_legal_a2_9: "2. 도수관, 2.23 (관로 보호 및 진단설비)에 의하면",
      faq_legal_a2_10:
        "상수도 관로의 보호 및 진단설비를 다음 각 항에 따라 설치할 수 있다.",
      faq_legal_a2_11:
        "(1) 상수도관의 파손이나 누수 및 지반함몰 등을 사전에 예방 및 감시하기 위한 센서 및 계측기를 관로 주변에 설치할 수 있다.",
      faq_legal_a2_12:
        "(2) 재해 또는 사고에 대비하여 시설의 안전성이 확보되도록 적절한 대책을 수립하여야 한다.",
      faq_legal_a2_13:
        "- 당사 솔루션은 누수를 실시간 감지하고, 지반함몰을 사전에 예방하여 자연재해나 사고에 조속히 대응할 수 있는 시스템입니다.",

      faq_legal_q3:
        "하수도와 관련된 법은 무엇이며, 하수도에 코위드원 솔루션을 적용할 수 있나요?",
      faq_legal_a3_1:
        "하수도 표준시방서(2017년) 유지관리 모니터링시스템 1.1.2 시스템 개요에 보면,",
      faq_legal_a3_2:
        "유지관리모니터링시스템은 하수관로에 설치된 유량계와 강우설량계에서 실시간으로 측정, 모니터링된 정보를 수질, 상수사용량 등 입력정보와 함께 하수처리장 관리센터내 서버에 취합하여 저장한 후 각종 자료를 분석할 수 있는 하수관로의 체계적인 모니터링시스템이나, 또한 필요시 하수관의 압력식 구간에서 관의 파손이나 누수 및 지반함몰 등을 사전에 예방 및 감시하기 위한 센서 및 계측기를 관로 주변에 설치할 수 있으며, 재해 또는 사고에 대비하여 시설의 안전성이 확보되도록 적절한 대책을 수립하여야 한다.",

      faq_legal_a3_3:
        "-당사 시스템은 관 파손예방, 지반함몰을 실시간 감지할 수 있어 시설물을 안전하게 관리할 수 있습니다.",

      faq_legal_q4:
        "기반시설관리법은 무엇이며 코위드원 솔루션은 어떻게 적용할 수 있나요?",
      faq_legal_a4_1:
        "기반시설관리법이란 기반시설의 체계적인 유지관리와 성능개선을 통하여 국민이 보다 안전하고 편리하게 기반시설을 활용할 수 있도록 하고, 나아가 국가 경제발전에 기여함을 목적으로 한다.",

      faq_legal_a4_2: "제3조 (기본원칙)에 따르면,",
      faq_legal_a4_3:
        "1. 관리주체는 기반시설의 안전성, 사용성, 내구성 등을 종합적으로 고려하여 선제적으로 관리함으로써 노후화에 다른 생애주기비용을 최소화한다.",

      faq_legal_a4_4: "제5조 (국가 등의 책무)에 따르면, ",
      faq_legal_a4_5:
        "①국가와 지방자치단체는 국민의 안전하고 편리한 기반시설 이용을 도모하기 위하여 필요한 종합적인 시책을 수립, 시행하여야 한다.",
      faq_legal_a4_6:
        "②국가와 지방자치단체는 기반시설의 유지관리와 성능개선에 필요한 예산을 확보하고, 중기재정계획에 반영하여야 한다.",
      faq_legal_a4_7:
        "③관리주체는 국가와 지방자치단체의 시책에 적극 협력하여야 하며, 기반시설의 유지관리와 성능개선에 필요한 재원을 마련하여야 한다.",
      faq_legal_a4_8: "제21조 (비용의 지원)에 따르면, ",
      faq_legal_a4_9:
        "①국가 및 지방자치단체는 기반시설의 체계적인 유지관리 및 성능개선을 위하여 해당 기반시설 관련 법률 및 대통령령으로 정하는 바에 따라 지방자치단체, 공공기관, 지방공기업 및 민간관리자에게 다음 각 호에 소요되는 비용의 전부 또는 일부를 출자, 출연, 보조 및 융자할 수 있다. 다만, 민간관리자에 대해서는 융자에 한정하여 지원할 수 있다.",

      faq_legal_a4_10:
        "②지방자치단체, 공공기관, 지방공기업 및 민간관리자가 재정지원을 요구하는 경우에는 국가 및 지방자치단체는 다음 각 호의 사항을 고려하여 지원할 수 있다. (생략)",
      faq_legal_a4_11:
        "- 당사 시스템은 파손예방 등 선제적 관리, 원인제공자에게 복구비용 청구 및 수명연장 효과로 생애주기비용을 기존 방식에 비해 50% 이상 줄일 수 있으며, 비용 또한 지원받을 수 있습니다.",

      faq_legal_q5:
        "지하안전법은 무엇이며, 코위드원 솔루션을 어떻게 적용할 수 있나요?",
      faq_legal_a5_1:
        "지하안전법이란 지하를 안전하게 개발하고 이용하기 위한 안전관리체계를 확립함으로써 지반침하로 인한 위해를 방지하고 공공의 안전을 확보함을 목적으로 한다.",
      faq_legal_a5_2: "제3조(국가 등의 책무)에 따르면,",
      faq_legal_a5_3:
        "①국가 및 지방자치단체는 국민의 생명, 신체 및 재산을 보호하기 위하여 지반침하 예방 및 지하안전관리에 관한 종합적인 시책을 수립, 시행하여야 한다.",
      faq_legal_a5_4:
        "②지하시설물관리자는 소관 지하시설물의 관리부실로 인한 지반침하를 예방하기 위하여 지하시설물 및 주변 지반에 대한 안전점검 및 유지관리규정을 정하여 관할 시장, 군수, 구청장에게 제출하여야 한다. 이를 변경하는 경우에도 또한 같다.",
      faq_legal_a5_5:
        "제10조 (지하개발사업자 및 지하시설물관리자의 안전관리)에 따르면,",
      faq_legal_a5_6:
        "②지하시설물관리자는 소관 지하시설물의 관리부실로 인한 지반침하를 예방하기 위하여 지하시설물 및 주변 지반에 대한 안전점검 및 유지관리규정을 정하여 관할 시장, 군수, 구청장에게 제출하여야 한다. 이를 변경하는 경우에도 또한 같다.",
      faq_legal_a5_7:
        "③시장, 군수, 구청장은 지반침하를 예방하기 위하여 필요하다고 인정하는 경우에는 건설공사 안전관리계획 또는 안전관리규정의 변경을 명할 수 있다. 이 경우 변경 명령을 받은 자는 정당한 사유가 없으면 이에 따라야 한다.",

      faq_legal_a5_8:
        "제34조(지하시설물 및 주변 지반에 대한 안전점검 등)에 따르면,",
      faq_legal_a5_9:
        "①지하시설물관리자는 소관 지하시설물 및 주변 지반에 대하여 안전관리규정에 따른 안전점검을 국토교통부령으로 정하는 바에 따라 정기적으로 실시하고 그 결과를 시장 군수, 및 구청장에게 통보하여야 한다.",

      faq_legal_a5_10:
        "②시장, 군수, 구청장은 관할 구역에 있는 지하시설물 및 주변 지반에 대하여 연 1회 이상 안전관리 실태를 점검하여야 한다. 다만, 제1항에 따라 통보받은 안전점검 결과를 검토하여 지반침하의 우려가 없다고 판단하는 경우에는 이를 생략할 수 있다.",

      faq_legal_a5_11:
        "- 당사 시스템은 관망을 실시간 관리하여 누수, 지반침하 여부를 실시간 확인할 수 있어 안전점검 주기를 늘려 점검비용을 줄일 수 있습니다.",

      faq_legal_q6:
        "중대재해처벌법은 무엇이며, 코위드원 솔루션을 어떻게 적용할 수 있나요?",
      faq_legal_a6_1:
        "중대재해처벌법이란 사업 또는 사업장, 공중이용시설 및 공중교통수단을 운영하거나 인체에 해로운 원료나 제조물을 취급하면서 안전, 보건조치 의무를 위반하여 인명피해를 발생하게 한 사업주, 경영책임자, 공무원 및 법인의 처벌 등을 규정함으로써 중대 재해를 예방하고 시민과 종사자의 생명과 신체를 보호함을 목적으로 함.",

      faq_legal_a6_2:
        "제4조(사업주와 경영책임자 등의 안전 및 보건 확보 의무)사업주 또는 경영책임자 등은 사업주나 법인 또는 기관이 실질적으로 지배, 운영, 관리하는 사업 도는 사업장에서 종사자의 안전, 보건상의 유해 또는 위험을 방지하기 위하여 그 사업 또는 사업장의 특성 및 규모 등을 고려하여 다음 각 호에 다른 조치를 하여야 한다.",

      faq_legal_a6_3:
        "1.재해예방에 필요한 인력 및 예산 등 안전보건관리체계의 구축 및 그 이행에 관한 조치",
      faq_legal_a6_4:
        "2.재해 발생 시 재발방지대책의 수립 및 그 이행에 관한 조치",
      faq_legal_a6_5:
        "3.중앙행정기관, 지방자치단체가 관계 법령에 따라 개선, 시정 등을 명한 사항의 이행에 관한 조치",
      faq_legal_a6_6: "제6조(중대산업재해 사업주와 경영책임자 등의 처벌)",
      faq_legal_a6_7:
        "①중대 산업재해에 이르게 한 사업주 또는 경영책임자 등은 1년 이상의 징역 또는 10억원 이하의 벌금에 처한다. 이 경우 징역과 벌금을 병과할 수 있다.",

      faq_legal_a6_8: "제9조(사업주와 경영책임자 등의 안전 및 보건 확보 의무)",
      faq_legal_a6_9:
        "①사업주 또는 경영책임자 등은 사업주나 법인 또는 기관이 실질적으로 지배, 운영, 관리하는 사업 또는 사업장에서 생산, 제조, 판매, 유통 중인 원료나 제조물의 설계, 제조, 관리상의 결함으로 인한 그 이용자 또는 그 밖의 사람의 생명, 신체의 안전을 위하여 다음 각 호에 따른 조치를 하여야 한다.",

      faq_legal_a6_10:
        "1.재해예방에 필요한 인력, 예산, 점검 등 안전보건관리체계의 구축 및 그 이행에 관한 조치 ",
      faq_legal_a6_11:
        "2. 재해 발생 시 재발방지대책의 수립 및 그 이행에 관한 조치",
      faq_legal_a6_12: "제11조(중대시민재해의 양벌규정)",
      faq_legal_a6_13:
        "법인 또는 기관의 경영책임자 등이 그 법인 또는 기관의 업무에 관하여 제10조에 해당하는 위반행위를 하면 그 행위자를 벌하는 외에 그 법인 또는 기관에게 다음 각 호의 구분에 따른 벌금형을 과한다. 다만, 법인 도는 기관이 그 위반행위를 방지하기 위하여 해당 업무에 관하여 상당한 주의와 감독을 게을리하지 아니한 경우에는 그러하지 아니하다.",

      faq_legal_a6_14:
        "당사 시스템은 지하시설물을 실시간 관리하는 시스템으로 안전사고가 발생할 수 없으나, 부득이 안전사고가 발생하더라도 안전사고 예방을 위해 상당한 주의와 감독을 게을리하지 않음을 입증할 수 있을 것으로 판단됩니다.",
      faq_other_q1: "코위드원 솔루션 사용시 해당하는 가점은 어떻게 되나요?",
      faq_other_a1:
        "2022년 7월 20일 국토부 보도자료에 따르면, 스마트건설 활성화를 위해 턴키 등 기술형 입찰 심의 시, 스마트 기술에 관한 최소 배점을 도입(7점)하고, 스마트 기술 적용이 입찰 조건인 스마트 턴키는 10~20점 배정, 비턴키 사업에도 설계 단계부터 스마트 기술이 반영되도록 엔지니어링 종심제 평가 항목에 “스마트 기술”을 신설하는 것으로 되어 있습니다. 당사 시스템은 정부 스마트시티 시범지구인 부산EDC현장과 세종시 5-1공구에 채택되어 시공 중이며, 정부가 인정하는 스마트 기술로 당사 시스템을 설계반영 시 가점을 받을 수 있습니다.",

      faq_other_q2: "코위드원 솔루션을 설계에 반영 시 수주 확률은 어떤가요?",
      faq_other_a2:
        "제3기 신도시를 비롯하여 신규 택지개발지구, 공단, 재개발 사업 등에 당사 시스템 도입을 위한 설계가 많이 진행되고 있으며, 당사 시스템을 설계에 반영할 경우 지하시설물 스마트기술 점수에 많은 영향을 주는 것으로 나타납니다",
    },
  },
};

const changeLanguage = (language) => {
  i18n.changeLanguage(language);
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ko", // 기본 언어 설정 (한국어)
  fallbackLng: "ko", // 번역이 없는 경우 기본 언어로 빠집니다.
  interpolation: {
    escapeValue: false, // 리액트 컴포넌트에서 HTML을 사용할 수 있도록 합니다.
  },
});

export { changeLanguage };
export default i18n;
