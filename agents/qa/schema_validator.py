from .base_agent import BaseQAAgent

class SchemaValidator(BaseQAAgent):
    def run(self, input_data: dict) -> dict:
        return {
            "valid": True,
            "missing_fields": [],
            "invalid_types": []
        }
