import { computeAverage } from "./gradeUtils.js";
import isPassing from "./gradeUtils.js";

const enrollees = [
    { name: "Ana Cruz", prelim: 85, midterm: 90, final: 88 },
    { name: "Bea Santos", prelim: 70, midterm: 65, final: 60 },
    { name: "Cid Ramos", prelim: 95, midterm: 92, final: 97 },
    { name: "Dex Alonzo", prelim: 60, midterm: 55, final: 50 },
    { name: "Eli Tan", prelim: 78, midterm: 80, final: 76 }
];

const getEnrollees = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(enrollees);
        }, 1000);
    });
};

async function generateReport() {
    try {
        const records = await getEnrollees();

        const results = records.map(
            ({ name, prelim, midterm, final }) => {

                const average = computeAverage(
                    prelim,
                    midterm,
                    final
                );

                const status = isPassing(average)
                    ? "PASSING"
                    : "PROBATION";

                return {
                    name,
                    average,
                    status
                };
            }
        );

        const passing = results.filter(
            ({ status }) => status === "PASSING"
        );

        const classTotal = results.reduce(
            (total, { average }) => total + average,
            0
        );

        const classAverage = classTotal / results.length;

        console.log("=== IT313 Enrollment Eligibility Report ===");

        results.forEach(({ name, average, status }) => {
            console.log(
                name + " - Average: " + average.toFixed(2) + " - " + status
            );
        });

        console.log(
            "Class Average: " + classAverage.toFixed(2)
        );

        console.log(
            "Passing: " + passing.length + " / " + results.length
        );

    } catch (error) {
        console.error("Error: " + error.message);
    }
}

generateReport();