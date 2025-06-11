from abc import ABC, abstractmethod

class BaseQAAgent(ABC):
    @abstractmethod
    def run(self, input_data: dict) -> dict:
        pass
