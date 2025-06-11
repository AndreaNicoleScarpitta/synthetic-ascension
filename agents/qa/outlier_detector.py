from utils.base_agent import BaseAgent

class OutlierDetector(BaseAgent):
    def run(self, input_data: dict) -> dict:
        '''
        Stub for OutlierDetector. Replace with real logic.
        '''
        output = {
            "outlier_detector": "stubbed output"
        }

        log = "OutlierDetector executed with stub output."

        return {
            "output": output,
            "log": log
        }
