import LoanProductPage from "../../../../components/LoanProductPage";
import { loanProducts } from "../../../data/loanProducts";

export const metadata = {
  title: "Construction Equipment Loan | Apphany",
  description: "Explore finance for eligible new and used construction machinery.",
};
export default function ConstructionEquipmentLoanPage() {
  return <LoanProductPage product={loanProducts.construction} />;
}
