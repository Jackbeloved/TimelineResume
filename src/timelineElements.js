import UTASLogo from './assets/UTAS.png';
import CBALogo from './assets/CBA.png';
import PrezzeeLogo from './assets/Prezzee.png';
import HUONLogo from './assets/HUON.png';
import ZJGSULogo from './assets/ZJGSU.png';
import TAS_GOVLogo from './assets/TAS_GOV.png';

let timelineElements = [
  {
    //id: 7,
    position: "Senior Insight Analyst",
    company: "Commonwealth Bank of Australia",
    location: "Sydney, Australia",
    description: `
      • Worked on end-to-end customer journey campaigns to derive actionable and impactful customer insights that will help drive the strategic goals of the business.<br />
      • Created data-driven segmentation, eligibility and contact channel selection to ensure every customer touchpoint is highly relevant and compelling.<br />
      • Managed campaign delivery in collaboration with marketing and product squads.<br />
      • Collected, monitored and analysed data from multiple sources to identify trends and patterns to inform business strategy and drive growth.<br />
      • Developed, maintained, and educated stakeholder relationships with a diverse group of technical and non-technical leadership teams.
    `,
    // buttonText: "View SSRS Projects",
    date: "Apr 2024 - Present",
    icon: CBALogo,
    logo: <img src="https://www.communications.tas.gov.au/__data/assets/image/0021/17355/100079-Tas-Gov_no-tag_rgb_vert.jpg" alt="alternatetext" style={{ textAlign: 'right' }}></img>
  },
  {
    //id: 6,
    company: "Prezzee",
    position: "Data Analyst",
    location: "Melbourne, Australia",
    description: `
      • Developed and maintained dbt data models and optimised ELT processes, resulting in a 50% faster processing time.<br />
      • Led monthly analytics presentations to senior stakeholders, facilitating better decision-making for BNPL customers.<br />
      • Conducted financial impact analyses for Strategic Partners, identifying user behaviours and potential loss.<br />
      • Provided actionable reporting and analysis across various business units, improving marketing ROI and partner relationships.<br />
      • Spearheaded new feature data analysis projects, contributing to an 80% increase in new feature adoption and a 10% improvement in customer signup conversion rates.<br />
      • Led Looker cost analysis to reduce monthly user license costs.<br />
      • Enhanced the performance of the ChatGPT-linked chatbot, reducing API costs per session.
    `,
    // buttonText: "View SSRS Projects",
    date: "Sep 2022 - Apr 2024",
    icon: PrezzeeLogo,
    logo: <img src="https://www.communications.tas.gov.au/__data/assets/image/0021/17355/100079-Tas-Gov_no-tag_rgb_vert.jpg" alt="alternatetext" style={{ textAlign: 'right' }}></img>
  },
  {
    id: 4,
    company: "Department of Treasury and Finance",
    position: "Data Analyst",
    location: "Hobart, Australia",
    description: `
     • Conducted thorough research and analysis of transactions, taxpayer behaviours, and trends to identify issues and recommend compliance activities, ensuring regulatory compliance.<br />
      • Performed both ad-hoc and routine analyses for various stakeholders, often within tight time constraints, delivering actionable insights and recommendations to support strategic decision-making processes.<br />
      • Managed, built, and maintained BAU and internal data-driven insights and reports (SSRS), providing users with accurate and up-to-date information.<br />
      • Utilised analytical methodologies and software tools (MS SQL Server) to manipulate data and conduct research, analysis, and presentation of information to internal stakeholders, facilitating data-driven decision-making processes.<br />
      • Collaborated and communicated effectively with other State and Commonwealth government agencies and organisations, fostering productive relationships and ensuring alignment on data-related initiatives and objectives.
    `,
    // buttonText: "View SSRS Projects",
    date: "Dec 2021 - Sep 2022",
    icon: TAS_GOVLogo,
    logo: <img src="https://www.communications.tas.gov.au/__data/assets/image/0021/17355/100079-Tas-Gov_no-tag_rgb_vert.jpg" alt="alternatetext" style={{ textAlign: 'right' }}></img>
  },
  {
    id: 3,
    company: "Huon Aquaculture Hobart, Tasmania",
    position: "Data Analyst/BI Report Developer",
    location: "Hobart, Australia",
    description: `
      • Conducted daily reporting data analysis using T-SQL and MS SQL Server.<br />
      • Developed and maintained analytical SSRS and Power BI reports.<br />
      • Collaborated with various departments to gather requirements and deliver data-driven insights.<br />
      • Automated data extraction and transformation processes to improve efficiency.<br />
      • Provided training and support to end-users on data tools and reporting systems.
    `,
    // buttonText: "View SSRS Projects",
    date: "Feb 2020 - Dec 2021",
    icon: HUONLogo,
    //logo: <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Huon_Aqua_Logo_Web.png" alt="alternatetext" style={{ textAlign: 'right' }}></img>
  },
  {
    id: 2,
    company: "University of Tasmania Hoabart, Tasmania",
    position: "Master of Information Technology and Systems",
    description: `
      • Mastered advanced data management technologies and strategies for efficient handling, storage, and analysis of large datasets.<br />
      • Acquired expertise in statistical methods and research principles, enabling the extraction of valuable insights from data to inform decision-making processes.<br />
      • Developed skills in applying data analysis techniques within information technology projects, ensuring data-driven solutions and optimal outcomes.
    `,
    // buttonText: "View Frontend Projects",
    date: "Feb 2020 - Dec 2021",
    icon: UTASLogo,
    // icon: <img src={UTASLogo} alt="UTAS Logo" style={{ width: '100%', height: '100%' }} />,
    logo: <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/60/UTasLogo.png/150px-UTasLogo.png" alt="alternatetext" style={{ textAlign: 'right' }}></img>
  },

  {
    id: 1,
    company: "Zhejiang Gongshang University, Hangzhou, China",
    position: " Bachelor of Sales Management",
    description: `
      • Mastered advanced data management technologies and strategies for efficient handling, storage, and analysis of large datasets.<br />
      • Acquired expertise in statistical methods and research principles, enabling the extraction of valuable insights from data to inform decision-making processes.<br />
      • Developed skills in applying data analysis techniques within information technology projects, ensuring data-driven solutions and optimal outcomes.
    `,
    // buttonText: "View Frontend Projects",
    date: "Oct 2011 - Jul 2015",
    icon: ZJGSULogo,
    logo: <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Snap2.PNG/240px-Snap2.PNG" alt="alternatetext" style={{ textAlign: 'right' }}></img>
  },
];

export default timelineElements;
