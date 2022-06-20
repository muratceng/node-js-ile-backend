-- film tablosunda film uzunluğu length sütununda gösterilmektedir. Uzunluğu ortalama film uzunluğundan fazla kaç tane film vardır?
SELECT COUNT(*) FROM film
where length>(select avg(length) from film);

-- film tablosunda en yüksek rental_rate değerine sahip kaç tane film vardır?
select Count(*) from film
where rental_rate =
(select max(rental_rate) from film)

-- film tablosunda en düşük rental_rate ve en düşün replacement_cost değerlerine sahip filmleri sıralayınız.
Select * from film 
where rental_rate =(Select min(rental_rate) from film)
and replacement_cost = (select min(replacement_cost) from film);

-- payment tablosunda en fazla sayıda alışveriş yapan müşterileri(customer) sıralayınız.
Select * from customer where customer_id = any
(Select customer_id from payment where amount = (select max(amount) from payment) )