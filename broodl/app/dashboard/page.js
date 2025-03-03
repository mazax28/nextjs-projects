import Main from "../../components/Main";
import Login from "../../components/Login";
import Dashboard from "../../components/Dashboard";
export const metadata = {
    title: "Broodl-Dashboard",
    description: "Dashboard page for Broodl",
  };

export default function DashboardPage(){
    
    return(
        <Main>
            <Dashboard/>
        </Main>
    )
}