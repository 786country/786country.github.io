export const person = {
  name: 'Naeem Ahmed', title: 'Staff Data Engineer & Tech Lead',
  email: '786country@gmail.com', github: 'https://github.com/786country',
  linkedin: 'https://www.linkedin.com/in/naeem-ahmed-78073853/',
  intro: 'I lead the systems that collect, organise, and deliver data at Yoco. I help engineering, analytics, finance, and operations teams get reliable data, while keeping the platform maintainable and its costs under control.',
};
export const impact = [
  { value: '65', label: 'data workflows migrated', detail: 'Moved Yoco’s scheduled production data jobs to Airflow 3, the system that coordinates when they run.' },
  { value: '97–99%', label: 'less data read per query', detail: 'Changed how database history is updated in BigQuery, reducing the data scanned by those update queries.' },
  { value: '~$2.3k', label: 'USD saved per month', detail: 'Reduced BigQuery query and storage charges through separate fixes. Additional capacity-pricing savings are excluded.' },
  { value: '183', label: 'peer MRs approved', detail: 'Helping other engineers ship' },
];
export const projects = [
  { name: 'Moving production data jobs to Airflow 3', category: 'Platform', number: '01', color: 'blue', label: 'YOCO / SCHEDULING DATA JOBS', description: 'Airflow coordinates when data jobs run and which jobs depend on each other. I planned and led Yoco’s move to version 3, completing it on 7 October 2026. Within that migration, I moved 14 hourly database-copying pipelines in five days and compared the copied records row for row to check correctness.', role: 'Staff Data Engineer · Tech Lead', date: 'Q3–Q4 2026', stack: ['Airflow 3', 'Assets', 'Helm', 'Python'] },
  { name: 'Lower BigQuery costs', category: 'Platform', number: '02', color: 'yellow', label: 'YOCO / CLOUD DATA COSTS', description: 'BigQuery charges for querying and storing data. I limited database-history updates to the relevant data, reducing the amount those queries read by 97–99%. Separate query and storage fixes saved about US$2,300 a month. A new capacity-pricing arrangement delivered further savings.', role: 'Staff Data Engineer', date: 'Q3–Q4 2026', stack: ['BigQuery', 'Partitioning', 'FinOps', 'Reservations'] },
  { name: 'Platform monitoring & reliability', category: 'Platform', number: '03', color: 'red', label: 'YOCO / RELIABILITY', description: 'When a data job fails, teams need to know what broke and how to respond. I added failure alerts, on-call notifications, dashboards, and searchable logs for Airflow 3, then wrote response guides. I also investigated failures in job scheduling and the flow of events between systems.', role: 'Staff Data Engineer · Tech Lead', date: '2026', stack: ['Prometheus', 'Grafana', 'OpsGenie', 'Airflow 3'] },
  { name: 'Sending warehouse data back to business systems', category: 'Data engineering', number: '04', color: 'green', label: 'YOCO / STREAMING & REVERSE ETL', description: 'Designed a reusable way to send processed data from BigQuery back to business services through Kafka, an event-streaming platform. Changed these transfers to wait for fresh warehouse data instead of running only on a clock. Also investigated missing fields and stalled event delivery.', role: 'Senior → Staff Data Engineer · Tech Lead', date: '2025–2026', stack: ['Kafka', 'Confluent', 'Protobuf', 'dbt', 'Postgres'] },
  { name: 'Connecting finance and logistics to NetSuite', category: 'Data engineering', number: '05', color: 'blue', label: 'YOCO / NETSUITE & LOGISTICS', description: 'Owned the software connecting operational systems to NetSuite, the business platform used for financial and inventory records. Added handling for failed messages, clearer errors, and finance notifications. Worked with supply chain on inventory, journals, and sales orders.', role: 'Senior Data Engineer · Tech Lead', date: '2024–2026', stack: ['Kotlin', 'NetSuite', 'Workato', 'Terragrunt', 'KMS'] },
  { name: 'Technical direction and shared knowledge', category: 'Leadership', number: '06', color: 'yellow', label: 'YOCO / TECHNICAL LEADERSHIP', description: 'Alongside hands-on delivery, reviewed and approved 183 code changes from other engineers. Contributed to hiring and onboarding, and wrote more than 35 architecture documents, plans, operational guides, incident reviews, and handovers so the team could maintain the platform together.', role: 'Staff Data Engineer · Tech Lead', date: 'Jul 2025 – Nov 2026', stack: ['Architecture', 'Code review', 'Mentoring', 'Runbooks'] },
  { name: 'Applied AI and forecasting for mining', category: 'AI & ML', number: '07', color: 'red', label: 'ENTELECT / APPLIED AI', description: 'Built working prototypes with Azure OpenAI to explore possible AI solutions. Earlier mining projects analysed methane patterns, estimated energy consumption, and forecast delays caused by rock conditions and ventilation or gas issues one month ahead.', role: 'Senior Data Scientist / Engineer', date: '2020–2023 projects', stack: ['Azure OpenAI', 'Dataiku', 'Databricks', 'Time series'] },
  { name: 'A production machine learning platform', category: 'AI & ML', number: '08', color: 'green', label: 'DELOITTE / PRODUCTION ML', description: 'Helped build and maintain DNAi, Deloitte’s platform for automating machine learning work. Developed a new user interface in Angular and connected it to the underlying services.', role: 'Developer', date: 'Jul 2019 – Oct 2020', stack: ['Python', 'Angular', 'Kafka', 'MongoDB', 'PostgreSQL'] },
  { name: 'News analysis for financial crime screening', category: 'Data engineering', number: '09', color: 'blue', label: 'DELOITTE / FINANCIAL CRIME', description: 'Built software that collected online content and analysed its meaning to identify potentially relevant negative news. These components supported a financial crime screening tool at Deloitte.', role: 'Developer', date: 'Oct 2017 – Jun 2019', stack: ['Python', 'NLP', 'Flask', 'Kafka', 'MSSQL'] },
];
export const additional = [
  ['Anglo American × Udacity', 'Led development of custom learning content for Anglo American’s first global pilot course with Udacity, using generated datasets, Python, and Power BI exercises.', 'Jan – Jun 2022'],
  ['AI developer tooling', 'Built tools that let AI assistants read platform information through the Model Context Protocol (MCP), alongside daily automated briefings. Wrote standards for using AI in coding workflows.', 'Yoco · 2025–2026'],
  ['Power prediction', 'Used machine learning to estimate energy consumption and greenhouse gas impacts for mining operations.', 'Jun – Dec 2021'],
  ['Methane analytics', 'Investigated historical methane patterns and contributing factors in mining.', 'Oct 2020 – Jun 2021'],
  ['Crop nutrients application', 'Led fixes and usability improvements in a crop-nutrients web application built with Dataiku and Dash.', 'Jan – Jun 2022'],
  ['Customer verification & financial records', 'Worked on cloud storage for Know Your Customer (KYC) reviews, identifying matching customer entities, and linking invoices with payments.', '2017 – 2019'],
];
export const experience = [
  { company: 'Yoco', dates: 'Apr 2024 – present', color: 'red', roles: [
    { title: 'Staff Data Engineer', dates: 'Mar 2026 – present', text: 'Tech Lead for the data platform. Lead the systems that move data from business applications into a shared analytical store and deliver it to teams and services. Set technical direction while staying hands-on with implementation, reliability, access, and cost.', highlights: ['Led the migration of scheduled data jobs to Airflow 3, reduced cloud data costs, and added monitoring and response guides.', 'Reviewed code, supported hiring and onboarding, and documented architecture and operating procedures.'] },
    { title: 'Senior Data Engineer', dates: 'Apr 2024 – Mar 2026', text: 'Joined to build data pipelines and own the NetSuite finance and inventory integration. Took on Tech Lead responsibilities in July 2025, expanding into database replication, data delivery between services, and planning the team’s work.', highlights: ['Built warehouse backups, finance alerts, and integration recovery tools with finance and supply chain.', 'Designed a reusable way to send processed analytical data back to business services through Kafka.', 'Defined code ownership and merge safeguards, and shared operational knowledge as responsibility grew.'] },
  ] },
  { company: 'Entelect', dates: 'From Oct 2020 · end date to confirm', color: 'yellow', roles: [
    { title: 'Senior Data Scientist / Engineer', dates: 'From Jan 2023 · end date to confirm', text: 'Developed AI prototypes, predictive models, and data pipelines for clients. Combined machine learning research with software design, explained findings to stakeholders, and supported newer engineers.' },
    { title: 'Data Scientist / Engineer', dates: 'Oct 2020 – Jan 2023', text: 'Translated client requirements into data pipelines, machine learning models, and forecasts, including work on mining operations. Presented findings in terms business teams could use.' },
  ] },
  { company: 'Deloitte South Africa', dates: 'Dec 2016 – Oct 2020', color: 'blue', roles: [
    { title: 'Consultant · Advanced Analytics & Cognitive Services', dates: 'Oct 2018 – Oct 2020', text: 'Built parts of an automated machine learning platform and a financial crime analytics tool. Worked on service migrations, user interfaces, online data collection, and text analysis.' },
    { title: 'Junior Consultant · Data', dates: 'Dec 2016 – Oct 2018', text: 'Worked on cloud storage and algorithms for matching customer and financial records. Supported Know Your Customer (KYC) reviews to help teams identify the correct entities.' },
  ] },
];
export const skills = [
  { title: 'Data platforms', subtitle: 'Collect, organise & process data', color: 'blue', items: ['Job scheduling: Airflow 2 & 3', 'Data storage & modelling: BigQuery, SQL, dbt', 'Database replication: Postgres, change capture', 'Python · Kotlin · Go · Bash'] },
  { title: 'Streaming & infrastructure', subtitle: 'Connect & deploy systems', color: 'red', items: ['Event streaming: Kafka, Confluent, Protobuf', 'Data delivery between warehouses and services', 'NetSuite · Workato · Salesforce', 'Infrastructure: Terraform, Terragrunt, GCP, AWS'] },
  { title: 'Reliability & leadership', subtitle: 'Operate & support the platform', color: 'green', items: ['Monitoring: Prometheus, Grafana, OpsGenie', 'Deployment & access: Kubernetes, permissions', 'Architecture · reviews · mentoring', 'Applied AI: machine learning, Azure OpenAI, MCP'] },
];
// Public LinkedIn listing retrieved 6 Nov 2026; Advanced Designer retained from original resume.
export const certifications = [
  { name: 'Azure AI Fundamentals', issuer: 'Microsoft', issued: 'Apr 2021', status: '', url: '', source: 'LinkedIn' },
  { name: 'Dataiku Core Designer', issuer: 'Dataiku', issued: 'Apr 2021', status: '', url: '', source: 'LinkedIn' },
  { name: 'Azure Data Fundamentals', issuer: 'Microsoft', issued: 'Mar 2021', status: '', url: 'https://www.credly.com/badges/4c1be963-3179-47ff-9dff-e1f8ab0b6419/public_url', source: 'LinkedIn' },
  { name: 'Azure Fundamentals', issuer: 'Microsoft', issued: 'Mar 2021', status: '', url: '', source: 'LinkedIn' },
  { name: 'DP-900 Azure Data Fundamentals Exam Prep In One Day', issuer: 'Udemy', issued: 'Mar 2021', status: '', url: '', source: 'LinkedIn' },
  { name: 'Python for Time Series Data Analysis', issuer: 'Udemy', issued: 'Nov 2020', status: '', url: '', source: 'LinkedIn' },
  { name: 'AWS Fundamental course in the AWS Machine Learning Scholarship', issuer: 'Udacity', issued: 'Aug 2020', status: '', url: '', source: 'LinkedIn' },
  { name: 'Amazon Web Services Cloud Practitioner', issuer: 'Amazon Web Services (AWS)', issued: 'May 2020', status: 'Expired May 2023', url: 'https://www.credly.com/badges/4a58d3e7-4d16-466f-92a8-cf2d792002b3', source: 'LinkedIn' },
  { name: 'Intel® Edge AI Scholarship Foundation Course Nanodegree Program', issuer: 'Udacity', issued: 'Feb 2020', status: '', url: '', source: 'LinkedIn' },
  { name: 'UiPath Foundation Training', issuer: 'UiPath', issued: 'Jul 2019', status: '', url: '', source: 'LinkedIn' },
  { name: 'Dataiku Advanced Designer', issuer: 'Dataiku', issued: '', status: '', url: 'https://verify.skilljar.com/c/fqto8gakqosf', source: 'Original résumé' },
];
