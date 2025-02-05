import Banner from "./Home/Banner";
import FinancePage from "./Home/FinancePage";
import PhilosophyPage from "./Home/PhilosophyPage";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FinancePage></FinancePage>
            <PhilosophyPage></PhilosophyPage>
        </div>
    );
};

export default Home;