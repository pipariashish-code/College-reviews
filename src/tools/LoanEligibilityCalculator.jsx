import { useState, useEffect } from "react";
import { Info, Calculator, CreditCard } from "lucide-react";

const EducationLoanCalculator = () => {
  const [formData, setFormData] = useState({
    loanAmount: "",
    interestRate: "",
    loanTerm: "",
    creditScore: "",
    annualIncome: "",
  });
  const [calculationResults, setCalculationResults] = useState({
    monthlyPayment: null,
    totalInterest: null,
    totalPayment: null,
    eligibility: null,
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate each field
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });

    // Additional specific validations
    if (formData.loanAmount && parseFloat(formData.loanAmount) <= 0) {
      newErrors.loanAmount = "Loan amount must be positive";
    }

    if (
      formData.interestRate &&
      (parseFloat(formData.interestRate) < 1 ||
        parseFloat(formData.interestRate) > 20)
    ) {
      newErrors.interestRate = "Interest rate must be between 1% and 20%";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateLoan = () => {
    // Reset previous results
    setCalculationResults({
      monthlyPayment: null,
      totalInterest: null,
      totalPayment: null,
      eligibility: null,
    });

    // Validate form
    if (!validateForm()) {
      return;
    }

    const { loanAmount, interestRate, loanTerm, creditScore, annualIncome } =
      formData;

    // Comprehensive Eligibility Check
    let eligibilityStatus = "Pending Review";
    const parsedCreditScore = parseInt(creditScore);
    const parsedAnnualIncome = parseFloat(annualIncome);

    if (parsedCreditScore < 650) {
      eligibilityStatus = "Low Credit Score";
    } else if (parsedAnnualIncome < 300000) {
      eligibilityStatus = "Low Income";
    } else {
      eligibilityStatus = "Likely Eligible";
    }

    // Loan Calculation
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseInt(loanTerm) * 12;
    const P = parseFloat(loanAmount);

    const monthlyPayment = (P * r) / (1 - Math.pow(1 + r, -n));
    const totalPayment = monthlyPayment * n;
    const totalInterest = totalPayment - P;

    setCalculationResults({
      monthlyPayment: monthlyPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      eligibility: eligibilityStatus,
    });
  };

  return (
    <div className=" h-screen p-8">
      <div className="max-w-xl mx-auto p-6 bg-gray-900 text-gray-100 rounded-lg shadow-2xl">
        <div className="flex items-center mb-6">
          <Calculator className="mr-3 text-blue-400" size={32} />
          <h2 className="text-3xl font-bold text-blue-300">
            Education Loan Calculator
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Loan Amount (INR)
              </label>
              <input
                type="number"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleInputChange}
                placeholder="Enter loan amount"
                className={`w-full p-3 bg-gray-800 rounded ${
                  errors.loanAmount ? "border-2 border-red-500" : ""
                }`}
              />
              {errors.loanAmount && (
                <p className="text-red-400 text-sm mt-1">{errors.loanAmount}</p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Interest Rate (%)
              </label>
              <input
                type="number"
                name="interestRate"
                value={formData.interestRate}
                onChange={handleInputChange}
                placeholder="Annual interest rate"
                className={`w-full p-3 bg-gray-800 rounded ${
                  errors.interestRate ? "border-2 border-red-500" : ""
                }`}
              />
              {errors.interestRate && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.interestRate}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Loan Term (Years)
              </label>
              <input
                type="number"
                name="loanTerm"
                value={formData.loanTerm}
                onChange={handleInputChange}
                placeholder="Loan duration"
                className="w-full p-3 bg-gray-800 rounded"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Credit Score
              </label>
              <input
                type="number"
                name="creditScore"
                value={formData.creditScore}
                onChange={handleInputChange}
                placeholder="Your credit score"
                className="w-full p-3 bg-gray-800 rounded"
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-sm text-gray-400">
            Annual Income (INR)
          </label>
          <input
            type="number"
            name="annualIncome"
            value={formData.annualIncome}
            onChange={handleInputChange}
            placeholder="Your annual income"
            className="w-full p-3 bg-gray-800 rounded"
          />
        </div>

        <button
          onClick={calculateLoan}
          className="w-full p-3 mt-6 bg-blue-600 rounded hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <CreditCard className="mr-2" /> Calculate Loan Details
        </button>

        {calculationResults.monthlyPayment && (
          <div className="mt-6 bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center mb-4">
              <Info className="mr-2 text-blue-400" />
              <h3 className="text-xl font-semibold text-blue-300">
                Loan Insights
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <p>
                Eligibility:{" "}
                <span
                  className={
                    calculationResults.eligibility === "Likely Eligible"
                      ? "text-green-400"
                      : "text-red-400"
                  }
                >
                  {calculationResults.eligibility}
                </span>
              </p>
              <p>
                Monthly Payment:{" "}
                <strong>₹{calculationResults.monthlyPayment}</strong>
              </p>
              <p>
                Total Interest:{" "}
                <strong>₹{calculationResults.totalInterest}</strong>
              </p>
              <p>
                Total Payment:{" "}
                <strong>₹{calculationResults.totalPayment}</strong>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationLoanCalculator;

// // src/components/EducationLoanCalculator.jsx

// import { useState } from "react";

// const EducationLoanCalculator = () => {
//   const [loanAmount, setLoanAmount] = useState("");
//   const [interestRate, setInterestRate] = useState("");
//   const [loanTerm, setLoanTerm] = useState("");
//   const [creditScore, setCreditScore] = useState("");
//   const [monthlyPayment, setMonthlyPayment] = useState(null);
//   const [eligibility, setEligibility] = useState(null);

//   const calculateLoan = () => {
//     if (!loanAmount || !interestRate || !loanTerm || !creditScore) {
//       alert("Please fill in all fields");
//       return;
//     }

//     // Check Eligibility
//     if (parseInt(creditScore) < 650) {
//       setEligibility("Not Eligible (Credit Score too low)");
//       setMonthlyPayment(null);
//       return;
//     }

//     setEligibility("Eligible");

//     // Calculate Monthly Payment using the formula
//     const r = parseFloat(interestRate) / 100 / 12;
//     const n = parseInt(loanTerm) * 12;
//     const P = parseFloat(loanAmount);
//     const payment = (P * r) / (1 - Math.pow(1 + r, -n));

//     setMonthlyPayment(payment.toFixed(2));
//   };

//   return (
//     <div className="p-6 bg-gray-900 text-gray-100 rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">Education Loan Calculator</h2>

//       <div className="space-y-4">
//         <input
//           type="number"
//           placeholder="Loan Amount (INR)"
//           value={loanAmount}
//           onChange={(e) => setLoanAmount(e.target.value)}
//           className="w-full p-3 bg-gray-800 rounded"
//         />
//         <input
//           type="number"
//           placeholder="Interest Rate (%)"
//           value={interestRate}
//           onChange={(e) => setInterestRate(e.target.value)}
//           className="w-full p-3 bg-gray-800 rounded"
//         />
//         <input
//           type="number"
//           placeholder="Loan Term (Years)"
//           value={loanTerm}
//           onChange={(e) => setLoanTerm(e.target.value)}
//           className="w-full p-3 bg-gray-800 rounded"
//         />
//         <input
//           type="number"
//           placeholder="Credit Score"
//           value={creditScore}
//           onChange={(e) => setCreditScore(e.target.value)}
//           className="w-full p-3 bg-gray-800 rounded"
//         />
//         <button
//           onClick={calculateLoan}
//           className="w-full p-3 bg-blue-600 rounded hover:bg-blue-700"
//         >
//           Calculate
//         </button>
//       </div>

//       {eligibility && (
//         <div className="mt-6">
//           <p className="text-lg font-bold">Eligibility: {eligibility}</p>
//           {monthlyPayment && (
//             <p className="text-lg">
//               Monthly Payment: <strong>₹{monthlyPayment}</strong>
//             </p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default EducationLoanCalculator;

// // import { useState } from "react";

// // const LoanEligibility = () => {
// //   const [income, setIncome] = useState("");
// //   const [expenses, setExpenses] = useState("");
// //   const [loanAmount, setLoanAmount] = useState(null);

// //   const calculateEligibility = () => {
// //     const disposableIncome = income - expenses;
// //     if (disposableIncome <= 0) {
// //       setLoanAmount(0);
// //     } else {
// //       setLoanAmount(disposableIncome * 10); // Simplified eligibility calculation
// //     }
// //   };

// //   return (
// //     <div className="bg-gray-900 p-8 rounded-md text-white">
// //       <h2 className="text-2xl font-bold mb-4">
// //         Education Loan Eligibility Calculator
// //       </h2>
// //       <div className="mb-4">
// //         <input
// //           type="number"
// //           placeholder="Monthly Income"
// //           className="p-2 rounded bg-gray-800 text-white w-full mb-2"
// //           value={income}
// //           onChange={(e) => setIncome(e.target.value)}
// //         />
// //         <input
// //           type="number"
// //           placeholder="Monthly Expenses"
// //           className="p-2 rounded bg-gray-800 text-white w-full"
// //           value={expenses}
// //           onChange={(e) => setExpenses(e.target.value)}
// //         />
// //       </div>
// //       <button
// //         onClick={calculateEligibility}
// //         className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded"
// //       >
// //         Calculate Eligibility
// //       </button>
// //       {loanAmount !== null && (
// //         <div className="mt-4">
// //           <p className="text-xl">
// //             Eligible Loan Amount:{" "}
// //             <span className="font-bold">${loanAmount}</span>
// //           </p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default LoanEligibility;
