from agents.reporting.base_agent import BaseReportingAgent

class TrustNarrative(BaseReportingAgent):
    def run(self, input_data: dict) -> dict:
        output = {
            "trust_narrative": "Placeholder trust narrative"
        }
        log = "TrustNarrative generated placeholder output"
        return {
            "output": output,
            "log": log
        }
class TrustReportWriter(BaseReportingAgent):
    def __init__(self, name):
        super().__init__(name)