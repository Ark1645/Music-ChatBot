import webbrowser
print("Welcome to the Music ChatBot")
name=input("What shall we be calling you by? ")
print("Hello",name)
print("How are you feeling today?")
print("1.Happy 2.Sad/Low 3.Energetic 4.Depressed 5.Guilty 6.Worn out 7.Bored")
mood=input("Select from among these...")
if(mood=='1'):
    print("Which song you want to hear ??")
    choice1=input("1.Paper Rings - Taylor swift 2.Nick Youre, dazy- Sunroof 3.Keep driving- Harry styles \n")
    if(choice1=='1'):
        url='https://www.youtube.com/watch?v=8zdg-pDF10g'
        webbrowser.open_new_tab(url)
    elif(choice1=='2'):
        url='https://youtu.be/cWUt8UZunOE'
        webbrowser.open_new_tab(url)
    elif(choice1=='3'):
        url='https://youtu.be/j10LorO-tg4'
        webbrowser.open_new_tab(url)
        
elif(mood=='2'):
    print("Which song you want to hear ??")
    choice2=("1.A Great Big World, Christina Aguilera - Say Something 2.Hurt- Johnny Cash 3. Peaying-Kesha")
    if(choice2=='1'):
        url='https://youtu.be/-2U0Ivkn2Ds'
        webbrowser.open_new_tab(url)
    elif(choice2=='2'):
        url='https://youtu.be/yL0RzgUpGjk'
        webbrowser.open_new_tab(url)
    elif(choice2=='3'):
        url='https://youtu.be/v-Dur3uXXCQ'
        webbrowser.open_new_tab(url)

elif(mood=='3'):
    print("Which song do you want to hear??")
    choice3=input("1.Numb- Linkin Park 2.The strokes- Machu Picchu 3.Green Day- Holiday")
    if(choice3=='1'):
        url='https://youtu.be/kXYiU_JCYtU'
        webbrowser.open_new_tab(url)
    if(choice3=='2'):
        url='https://youtu.be/st3y_48Kw50'
        webbrowser.open_new_tab(url)
    if(choice3=='3'):
        url='https://youtu.be/A1OqtIqzScI'
        webbrowser.open_new_tab(url)
        
elif(mood=='4'):
    print("Which song do you want to hear??")
    choice3=input("1.Unwell - Matchbox(20) 2.Better place - Rachael Platten 3. Heavy - Linkin Park")
    if(choice3=='1'):
        url='https://youtu.be/6jP7WcO-b4U'
        webbrowser.open_new_tab(url)
    if(choice3=='2'):
        url='https://youtu.be/UDBSRuKDHm4'
        webbrowser.open_new_tab(url)
    if(choice3=='3'):
        url='https://youtu.be/5dmQ3QWpy1Q'
        webbrowser.open_new_tab(url)
        
elif(mood=='5'):
    print("Which song do you want to hear??")
    choice3=input("1.Tears in heaven - Eric Clapton 2.Damn your eyes - Luce Dufault 3.Sorry- Justin Beiber")
    if(choice3=='1'):
        url='https://youtu.be/ZqtyQuXo9zM'
        webbrowser.open_new_tab(url)
    if(choice3=='2'):
        url='https://youtu.be/_KVyorYFcXg'
        webbrowser.open_new_tab(url)
    if(choice3=='3'):
        url='https://youtu.be/8ELbX5CMomE'
        webbrowser.open_new_tab(url)
        
elif(mood=='6'):
    print("Which song do you want to hear??")
    choice3=input("1.Fade to black(Remastered 2. Soothe- Alan Ellis 3. I remember - Jade Monaco")
    if(choice3=='1'):
        url='https://youtu.be/9HZ_tx8aWuA'
        webbrowser.open_new_tab(url)
    if(choice3=='2'):
        url='https://youtu.be/tP51YXn6UYk'
        webbrowser.open_new_tab(url)
    if(choice3=='3'):
        url='https://youtu.be/rNG6YlPcByA'
        webbrowser.open_new_tab(url)
        
elif(mood=='7'):
    print("Which song do you want to hear??")
    choice3=input("1.Bored - billie Eilish 2.Boredom Buzzcocks 3. Bored to death - Blink 182")
    if(choice3=='1'):
        url='https://youtu.be/zsGHdGHHwd8'
        webbrowser.open_new_tab(url)
    if(choice3=='2'):
        url='https://youtu.be/QoYiQ8Qsozk'
        webbrowser.open_new_tab(url)
    if(choice3=='3'):
        url='https://youtu.be/lic0oCDMfwk'
        webbrowser.open_new_tab(url)
else:
    print("Are you not feeling anything?? Do you want us to help you with it? If yes then let me put something amazing up only for you :) ")
    url='https://youtu.be/syFZfO_wfMQ'
    webbrowser.open_new_tab(url)
            
