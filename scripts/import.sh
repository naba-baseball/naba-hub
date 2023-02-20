#!/usr/bin/bash bash
for filename in ./scripts/*.sql; do
	echo "running $filename"
	docker compose exec -T db sh -c 'exec mariadb --user=root --password=password naba' < $filename;	
done
