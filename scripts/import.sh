#!/usr/bin/bash bash
for filename in *.sql; do
	echo "running $filename"
	docker compose exec -i db sh -c 'exec mariadb -u root naba' < $filename;	
done
