from agents.reporting.base_agent import BaseReportingAgent

class TrustReportWriter(BaseReportingAgent):
    def run(self, data: dict) -> dict:
        return {
            "trust_report": {
                "status": "placeholder",
                "confidence_score": None,
                "explanation": "Trust score logic not yet implemented.",
                "generated_by": "TrustReportWriter"
            }
        }
