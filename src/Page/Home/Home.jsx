import Banner from "./Home/Banner";
import Description from "./Home/Description";
import FeatureFinance from "./Home/FeatureFinance";
import FinancePage from "./Home/FinancePage";
import Legacy from "./Home/Legacy";
import PhilosophyPage from "./Home/PhilosophyPage";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FinancePage></FinancePage>
            <PhilosophyPage></PhilosophyPage>
            <Description></Description>
            <FeatureFinance></FeatureFinance>
            <Legacy></Legacy>
        </div>
    );
};

export default Home;