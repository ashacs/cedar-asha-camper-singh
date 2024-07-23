import data from "../../data";
import Hero from "../../components/Hero/index";
import "./index.css";
import Drawer from "../../components/Drawer/index";
import Link from "next/link";
import currency from "../../utils/currency";

export default function BillsLanding() {
  const { user, bills } = data;
  const { count, amountDue } = bills;

  const billsCountLabel = count === 1 ? "bill" : "bills";

  return (
    <div className="bills-landing_container">
      <Hero className="bills-landing_hero">
        <Hero.Title>{`Hi, ${user.firstName}`}</Hero.Title>
        <Hero.Description>
          {`You have ${count} medical ${billsCountLabel} ready from ABC Health System. You can pay
          your bills here or verify your identity to view full bill details.`}
        </Hero.Description>
      </Hero>

      <Drawer>
        <div className="bills-landing_amount-due-container">
          <span className="bills-landing_amount-due-label">Total due</span>
          <span className="bills-landing_amount-due-value">
            {currency(amountDue)}
          </span>

          <Link href="/payment" className="bills-landing_payment-link">
            Pay total
          </Link>
        </div>
      </Drawer>
    </div>
  );
}
