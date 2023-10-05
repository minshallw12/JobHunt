import json


def jsonCleaner(json_list):
    result = []
    for i, entry in enumerate(json_list):
        newEntry = {
                    "model": "jobhunt.jobs",
                    "pk": f"{i+1}",
                    "fields": entry
                    }
        result.append(newEntry)
    return result

# Read data from "dirtyjobs.json"
try:
    with open("./dirtyjobs.json", "r") as file:
        data = json.load(file)
except FileNotFoundError:
    print("File 'dirtyjobs.json' not found.")
    data = []

# Process the data
cleaned_data = jsonCleaner(data)

# Write the result into "jobs.json"
with open("./jobs.json", "w") as output_file:
    json.dump(cleaned_data, output_file, indent=4)

print("Data has been cleaned and written to 'jobs.json'")