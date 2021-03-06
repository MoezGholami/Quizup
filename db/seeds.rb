# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

def seed_users_idempotent
  if User.where(firs_name: 'غلام').empty?
    gholam=User.new(firs_name:'غلام', last_name:'غلامی', email:'gholam@cafequiz.ir',
										sex:'مذکر', country:'ایران', password:'123456789', password_confirmation:'123456789')
    gheysar=User.new(firs_name: 'قیصر', last_name:'قیصرخان', email:'gheysar@cafequiz.ir',
									 	sex:'مذکر', country:'ایران', password:'123456789', password_confirmation:'123456789')
		ramtin=User.new(firs_name: 'رامتین', last_name: 'رامتین خان', email:'ramtin@cafequiz.ir',
										sex:'مونث', country:'ایران', password:'123456789', password_confirmation:'123456789')
		hooshang=User.new(firs_name: 'هوشنگ', last_name: 'هوشنگ خان', email:'hoshang@cafequiz.ir',
									 	sex:'مذکر', country:'ایران', password:'123456789', password_confirmation:'123456789')
		changiz=User.new(firs_name: 'چنگیز', last_name: 'چنگیزخان', email:'changiz@cafequiz.ir',
									 sex:'مذکر', country:'ایران', password:'123456789', password_confirmation:'123456789')



    gholam.skip_confirmation!
    gheysar.skip_confirmation!
		ramtin.skip_confirmation!
		hooshang.skip_confirmation!
		changiz.skip_confirmation!

    gholam.save!
    gheysar.save!
		ramtin.save!
		hooshang.save!
		changiz.save!

    puts 'users seeded'
  else
    puts 'users exist, aborting seeding users.'
  end
end

def seed_categories_idempotent
	if Category.where(name:'کامپیوتر').empty?
		cs=Category.new(name: 'کامپیوتر', image: 'fc.jpg'); cs.save!
		history=Category.new(name:'تاریخ', image:'fc6.jpg'); history.save!
		cinema=Category.new(name:'سینما', image:'fc7.jpg'); cinema.save!
		sports=Category.new(name:'ورزش', image:'fc3.jpg'); sports.save!
		earth=Category.new(name:'جغرافیا',image:'fc5.jpg'); earth.save!
		music=Category.new(name:'موزیک',image:'fc8.jpg'); music.save!
		art=Category.new(name:'هنر',image:'fc2.jpg'); art.save!
		literature=Category.new(name:'ادبیات', image: 'fc1.jpg'); literature.save!
		puts 'categories seeded'
	else
		puts 'categories exist, aborting seeding categories'
	end
end

def seed_questions_idempotent
	# only for computer science category
	cs_cat=Category.first
	if Category.where(name: 'کامپیوتر').length > 0
		cs_cat=Category.where(name: 'کامپیوتر').first
	end

	if cs_cat.questions.length<10
		#answers are 1 based!
		q1=Question.new(questionTitle: 'بایت چند بیت است؟', answer:4, choice1:'3', choice2:'19',
										choice3:'0', choice4:'8', category_id:cs_cat.id); q1.save!
		q2=Question.new(questionTitle: 'نام حافظه ی کامپیوتر', answer: 3, choice1: 'Mouse', choice2: 'Printer',
										choice3:'RAM', choice4:'CPU', category_id:cs_cat.id); q2.save!
		q3=Question.new(questionTitle: 'کدام گزینه سیستم عامل نیست؟', answer: 2, choice1:'Suse', choice2:'raspberry',
										choice3:'el capitan', choice4:'kitkat', category_id:cs_cat.id); q3.save!
		q4=Question.new(questionTitle:'از الگوریتم های کوتاه ترین مسیر', answer:1, choice1:'Dijkstra', choice2:'Prim',
										choice3: 'Kruskal', choice4:'Hungarian', category_id: cs_cat.id); q4.save!
		q5=Question.new(questionTitle:'از الگوریتم های رمز نگاری:', answer:4, choice1:'md5', choice2:'Diffie-Hellman',
									choice3:'SSL', choice4:'3DES', category_id:cs_cat.id); q5.save!
		q6=Question.new(questionTitle:'which one is not one of the Gang Of Four', answer:3, choice1:'Ralph Johnson', choice2:'Erich Gamma',
									choice3:'Kent Beck', choice4:'Richard Helm', category_id:cs_cat.id); q6.save!
		q7=Question.new(questionTitle:'Best web framework ever', answer:2, choice1:'Laravel', choice2:'Rails',
									choice3:'ionic', choice4:'django', category_id:cs_cat.id); q7.save!
		q8=Question.new(questionTitle:'Length of IPV6 in bits', answer:1, choice1:'128', choice2:'64',
									choice3:'48', choice4:'32', category_id:cs_cat.id); q8.save!
		q9=Question.new(questionTitle:'linux command to see file sizes', answer:4, choice1:'ls', choice2:'gtf',
									choice3:'grep', choice4:'du', category_id:cs_cat.id); q9.save!
		q10=Question.new(questionTitle:'Which one is not version control system', answer:3, choice1:'git', choice2:'svn',
									choice3:'gpg', choice4:'Mercurial', category_id:cs_cat.id); q10.save!
		puts 'questions added to cs category'
	else
		puts 'questions exist, aborting seeding questions'
	end

end

def seed_acheivement_idempotent
	if(Acheivement.where(name:"قهرمان").empty?)
		a1 = Acheivement.new( name:"قهرمان", dec:"به امتیاز ۱۰۰۰ رسیدی ", image:"/assets/m3.png")
		a2 = Acheivement.new( name:"مشتی", dec:"به تعداد برد ۵ رسیدی", image:"/assets/m4.png")
		a3 = Acheivement.new( name:"علاف و آسمان جل", dec:"از بیکاری به ۱۰ بازی در کافه کوییز رسیدی!", image:"/assets/m6.png")
		a4 = Acheivement.new( name:"قهرمان کل", dec:"به چندین مدال دست یافتی ", image:"/assets/m۱.png")
		a1.save!
		a2.save!
		a3.save!
		a4.save!
		puts 'achivements seeded'
	else
		puts 'achivements exist, aborting seeding achivements.'
	end
end


if Rails.env.development?
  puts 'seeding on development environment.'
  seed_users_idempotent
	seed_categories_idempotent
	seed_questions_idempotent
  seed_acheivement_idempotent
	puts 'seeding done'
end

if Rails.env.production?
	# caution: this function works on production environment
	# be careful when seeding production db
	puts 'warning: seeding on production environment.'
	seed_users_idempotent
	seed_categories_idempotent
	seed_questions_idempotent
	seed_acheivement_idempotent
	puts 'seeding done'
end

if Rails.env.test?
	puts 'seeding on test environment.'
	seed_users_idempotent
	seed_categories_idempotent
	seed_questions_idempotent
	seed_acheivement_idempotent
	puts 'seeding done'
end