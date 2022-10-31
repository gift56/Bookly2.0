import AccountHero from "../components/AccountData/AccountHero";
import AcountHeader from "../components/AccountData/AcountHeader";
import Features from "../components/Home/Features";

const AccountPage = () => {
  return (
    <div className="acountPagewrapper">
      <AcountHeader />
      <AccountHero />
      <Features rowId="1" title="Best Seller Books" />
      <Features rowId="2" title="" />
    </div>
  );
};

export default AccountPage;
