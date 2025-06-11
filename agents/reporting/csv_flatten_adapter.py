from agents.reporting.base_agent import BaseReportingAgent
import csv
import io

class CSVFlattenAdapter(BaseReportingAgent):
    def run(self, input_data: dict) -> dict:
        """
        Flattens a list of records into CSV format.
        Assumes input_data['records'] is a list of flat dicts.
        """
        records = input_data.get("records", [])
        if not isinstance(records, list) or not records:
            return {
                "csv": "",
                "error": "No records to flatten"
            }

        headers = sorted({key for r in records for key in r})
        output = io.StringIO()
        writer = csv.DictWriter(output, fieldnames=headers)
        writer.writeheader()
        for row in records:
            writer.writerow(row)

        return {
            "csv": output.getvalue(),
            "row_count": len(records),
            "generated_by": "CSVFlattenAdapter"
        }
