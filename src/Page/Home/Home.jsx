import Banner from "./Home/Banner";
import Description from "./Home/Description";
import FinancePage from "./Home/FinancePage";
import PhilosophyPage from "./Home/PhilosophyPage";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FinancePage></FinancePage>
            <PhilosophyPage></PhilosophyPage>
            <Description></Description>
        </div>
    );
};

export default Home;