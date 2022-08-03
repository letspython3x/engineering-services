import random
import string
import json
import csv


def create_json_from_csv(csvFile=None):
    csvFile = 'servicesData.csv'
    with open(csvFile) as fin, open("servicesData.json", "w") as outfile:
            data = [row for row in csv.DictReader(fin)]
            json.dump(data, outfile)

def createData(length):
    data = []
    letters = string.ascii_lowercase
    for i in range(0, length):
        datum = {
            'id': i + 1,
            'title': 'Name :' + (''.join(random.choice(letters) for i in range(10))).capitalize(),
            'description': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
            'category': f'category-{random.randint(0, 2)}',
            'subCategory': f'subCategory-{random.randint(0, 2)}',
            'imageName': 'services.jpeg'
        }
        data.append(datum)
    data = json.dumps(data)
    print(data)
    return data


if __name__ == '__main__':
    # createData(10)
    create_json_from_csv()
