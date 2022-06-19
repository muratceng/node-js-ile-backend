-- city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
Select city.city, country.country from city
inner join country on country.country_id = city.country_id;

-- customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
Select payment.payment_id, customer.first_name, customer.last_name from customer
inner join payment on customer.customer_id = payment.customer_id;

-- customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
select rental.rental_id, customer.first_name, customer.last_name from customer
inner join rental on customer.customer_id = rental.customer_id;