import LoanProductPage from "../../../../components/LoanProductPage";
import { loanProducts } from "../../../data/loanProducts";

export const metadata = {
  title: "Business Loan | Apphany",
  description: "Explore business funding for working capital, equipment and expansion.",
};
export default function BusinessLoanPage() {
  return <LoanProductPage product={loanProducts.business} />;
}
