yarn build;
cd ../neonelemental.github.io;
rm -r *;
mv ../neonelemental/dist/* .;
echo neonelemental.com >> ./CNAME;
git add .;
git commit -m "`date`";
git push origin master;