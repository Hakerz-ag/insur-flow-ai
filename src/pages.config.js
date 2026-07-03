import Home from './pages/Home';
import EmailIntelligence from './pages/EmailIntelligence';
import SubmissionTriage from './pages/SubmissionTriage';
import PortfolioAnalytics from './pages/PortfolioAnalytics';
import CaseStudies from './pages/CaseStudies';
import About from './pages/About';
import Contact from './pages/Contact';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "EmailIntelligence": EmailIntelligence,
    "SubmissionTriage": SubmissionTriage,
    "PortfolioAnalytics": PortfolioAnalytics,
    "CaseStudies": CaseStudies,
    "About": About,
    "Contact": Contact,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};