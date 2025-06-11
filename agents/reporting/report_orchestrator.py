from agents.reporting.base_agent import BaseReportingAgent

class ReportOrchestrator(BaseReportingAgent):
    def run(self, data: dict) -> dict:
        """
        Gathers key reporting outputs and assembles the final synthetic data report.
        """
        report = {
            "report_generated_by": "ReportOrchestrator",
            "timestamp": data.get("timestamp", "unknown"),
            "sections": {}
        }

        for key in data:
            if key.lower().startswith("audit"):
                report["sections"]["audit_log"] = data[key]
            elif "summary" in key.lower():
                report["sections"]["summary"] = data[key]
            elif "trust" in key.lower():
                report["sections"]["trust"] = data[key]
            elif "regulatory" in key.lower():
                report["sections"]["regulatory"] = data[key]
            elif "lineage" in key.lower():
                report["sections"]["lineage"] = data[key]
            elif "format" in key.lower():
                report["sections"]["formatted_output"] = data[key]

        return {
            "synthetic_data_report": report
        }
