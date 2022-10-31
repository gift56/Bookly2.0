import AccountHero from "../components/AccountData/AccountHero";
import AcountHeader from "../components/AccountData/AcountHeader";
import Features from "../components/Home/Features";

const AccountPage = () => {
  return (
    <>
      <AcountHeader />
      <AccountHero />
      <Features rowId="1" title="Top Features" />
    </>
  );
};

export default AccountPage;
