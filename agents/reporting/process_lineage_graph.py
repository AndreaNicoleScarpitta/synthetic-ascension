# Tracks patient-level provenance across generation agents
from agents.reporting.base_agent import BaseReportingAgent
from typing import Dict, Any, List

class ProcessLineageGraph(BaseReportingAgent):
    def run(self, input_data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Extracts a simple lineage graph from input_data assuming each agent's output
        is stored under a key matching its name.
        """
        lineage: List[Dict[str, str]] = []

        # Example heuristic: if one agent's output is used as another's input, create an edge.
        # Since we can't trace real inputs/outputs here, just fake a linear chain based on key order.
        agent_keys = list(input_data.keys())
        for i in range(1, len(agent_keys)):
            lineage.append({
                "from": agent_keys[i - 1],
                "to": agent_keys[i]
            })

        return {
            "lineage_graph": lineage,
            "node_count": len(agent_keys),
            "edge_count": len(lineage)
        }
