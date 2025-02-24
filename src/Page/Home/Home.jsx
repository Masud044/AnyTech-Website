import Banner from "./Home/Banner";
import Description from "./Home/Description";
import FeatureFinance from "./Home/FeatureFinance";
import FinancePage from "./Home/FinancePage";
import PhilosophyPage from "./Home/PhilosophyPage";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FinancePage></FinancePage>
            <PhilosophyPage></PhilosophyPage>
            <Description></Description>
            <FeatureFinance></FeatureFinance>
        </div>
    );
};

export default Home;