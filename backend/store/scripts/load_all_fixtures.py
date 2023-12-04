from django.core.management import call_command

def run():
    fixtures_list_file = 'fixtures_list.txt'

    with open(fixtures_list_file, 'r') as file:
        fixtures = [line.strip() for line in file.readlines()]

    for fixture in fixtures:
        call_command('loaddata', fixture)