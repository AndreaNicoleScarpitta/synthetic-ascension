from utils.base_agent import BaseAgent

class CohortSummary(BaseAgent):
    def run(self, input_data: dict) -> dict:
        '''
        Stub for CohortSummary. Replace with real logic.
        '''
        output = {
            "cohort_summary": "stubbed output"
        }

        log = "CohortSummary executed with stub output."

        return {
            "output": output,
            "log": log
        }
