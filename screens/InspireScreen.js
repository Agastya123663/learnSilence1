import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity , Image,SafeAreaView, ScrollView} from 'react-native';

export default class GetInspiredScreen extends React.Component{
    render(){
      return(
        <SafeAreaView>
          <ScrollView>
              <View>

              <View>
          <TouchableOpacity 
             onPress={()=>{this.props.navigation.navigate('Inspire')} } 
             style={{marginTop:5,backgroundColor:'#d9fadd',borderRadius:25,height:30,width:100,alignItems:'center',justifyContent:'center',marginLeft:20}}>
              <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15,alignItems:'center'}} >Back</Text>
          </TouchableOpacity>
        </View>

        
                <View>
                   
                   <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20}}>1) Ludwig Van Beethoven</Text>

                  <Text style={{textAlign:'center',fontWeight:'bold',marginTop:20}}>Who was he: Arguably, Beethoven is the most famous Deaf person on our list. He was a German pianist born in 1770, and is regarded as the Greatest Classical Composer ever.</Text>

                  <Image source={require('../assets/inspireImg1.jpeg')} style={{marginLeft:70,marginTop:5,width:170,height:200,}}/>

                  <Text style={{textAlign:'center',fontWeight:'bold',marginTop:20}}>Beethoven started to lose his hearing at the age of 26, with a suspected disease called typhus (lead poisoning). And by the age of 52 he was presumed to be completely deaf. However this is when he produced some of his most important works. As his hearing got worse Beethoven struggled to communicate with people. The biggest challenge for him was conducting and performing in concerts as he couldn’t hear when the music stopped and the audience applauded..</Text>


                  <Text style={{textAlign:'center',fontWeight:'bold',marginTop:20}}>Biggest achievements: Beethoven’s Ninth Symphony, composed after he’d lost his hearing, is considered one of the greatest classical pieces of all time. Other notable pieces include Fur Elise, the Fifth Symphony and the Moonlight Sonata.

</Text>
                </View>

                <View style={{marginTop:30}}>
                   
                   <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20}}>2) Will.i.am</Text>

                  <Text style={{textAlign:'center',fontWeight:'bold',marginTop:20}}>Who is he: Real name William Adams; he is an American rapper, songwriter, entrepreneur, actor, DJ, record producer and philanthropist. Born in 1975, he is best known for being part of the Black Eyed Peas, managing and collaborating with Cheryl Cole and being one of the main judges on The Voice UK.</Text>

                  <Image source={require('../assets/inspire2Img.jpg')} style={{marginLeft:70,marginTop:5,width:170,height:200,}}/>

                  <Text style={{textAlign:'center',fontWeight:'bold',marginTop:20}}>Will developed tinnitus in the early years of his life due to exposure to loud prolonged music. Tinnitus generates a constant ringing in the ear; once the nerves in the ear are damaged it is incurable. Having this condition can produce serious pain and the noise is said to be worse than chalk scraping on a blackboard. People who suffer from this condition tend to surround themselves with noise all the time to make the ringing easier to ignore.

</Text>


                  <Text style={{textAlign:'center',fontWeight:'bold',marginTop:20}}>With Black Eyed Peas; he sold 31 million albums worldwide, earning himself three Grammy Awards. Will has worked with Michael Jackson, Britney Spears and Miley Cyrus, and appeared on X-Factor, American Idol and The Voice UK. He studied Design and Merchandising and has released several clothing lines.
</Text>
                </View>

                <View style={{marginTop:30}}>
                   
                   <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20}}>3) Thomas Edison</Text>

                  <Text style={{textAlign:'center',fontWeight:'bold',marginTop:20}}>Who is he: Thomas Edison is considered the most famous American Inventor of all time. Born in 1847, Edison is best known for inventing the light bulb, phonograph and Motion Picture.</Text>

                  <Image source={require('../assets/inspire3Img.jpeg')} style={{marginLeft:70,marginTop:5,width:170,height:200,}}/>

                  <Text style={{textAlign:'center',fontWeight:'bold',marginTop:20}}>Thomas Edison had hearing problems from childhood and was thought to be completely deaf by his early teenage years. The cause of his deafness is unknown; although it did run in Edison’s family. Edison saw advantages of being deaf and enjoyed that it helped him concentrate on his work.
</Text>


                  <Text style={{textAlign:'center',fontWeight:'bold',marginTop:20}}>One of Edison’s most remarkable achievements is the invention of the lightbulb, which he ensured would light a home for hours. Secondly, he designed and developed the system of electric power to generate electricity to homes, businesses and factories – a crucial advancement in the Modern Industrialised World. Edison also produced the phonograph, which was used to created motion pictures. Edison worked on it for 52 years and it’s said that this was his favourite invention
</Text>
                </View>

                <View style={{marginTop:30}}>
                   
                   <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20}}>4) Helen Keller</Text>

                  <Text style={{textAlign:'center',fontWeight:'bold',marginTop:20}}>Who is she: Helen Keller, born in 1880, was a Famous American educator, Political Activist and writer of twelve inspirational books.</Text>

                  <Image source={require('../assets/inspire4Img.jpeg')} style={{marginLeft:70,marginTop:5,width:170,height:200,}}/>

                  <Text style={{textAlign:'center',fontWeight:'bold',marginTop:20}}>Keller contracted an illness at 18 months called ‘Brain Fever’ which left her blind, deaf and mute, but she developed a limited way of communicating and created a basic form of sign language. Keller began a relationship with a woman called Anne Sullivan who became her guide and mentor, teaching her finger spelling and other ways of communicating.
</Text>


                  <Text style={{textAlign:'center',fontWeight:'bold',marginTop:20}}>Keller was the first Deafblind person to achieve a Bachelor of Arts degree. She became a writer and communicated with millions of people across the Globe. Keller was also the founding member of the first organisation to support Blind adults, where she visited and gave hope to war veterans and blinded soldiers. She will be remembered for the endless work she did around the world for people with disabilities.
</Text>
                </View>

                <View style={{marginTop:30}}>
                   
                   <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20}}>5) Jane Lynch</Text>

                  <Text style={{textAlign:'center',fontWeight:'bold',marginTop:20}}>Who is she: Jane Lynch is an American actress who is most famously known for the award winning TV series Glee. Born in 1960, she is completely deaf in one ear.</Text>

                  <Image source={require('../assets/inspire5Img.jpg')} style={{marginLeft:70,marginTop:5,width:170,height:200,}}/>

                  <Text style={{textAlign:'center',fontWeight:'bold',marginTop:20}}>Lynch found out she was deaf in one ear when she was seven years old whilst playing a hearing game with her brother.  Jane’s hearing loss was caused by nerve deafness suspected from a very high temperature when she was a baby. Jane’s ear is stone deaf meaning hearing aids were not an option. She was determined to overcome her disability and made an exceptional career for herself in Film and Television.


</Text>


                  <Text style={{textAlign:'center',fontWeight:'bold',marginTop:20}}>Lynch has starred in some of America’s most popular shows and movies, including Friends, Glee, Desperate Housewives, West Wing, Wreck it Ralph and the 40 year old virgin.
</Text>
                </View>

                <View>
          <TouchableOpacity 
             onPress={()=>{this.props.navigation.navigate('TabNavigator')} } 
             style={{marginTop:15,backgroundColor:'#f1f5a4',borderRadius:65,height:30,width:100,alignItems:'center',justifyContent:'center',marginLeft:120}}>
              <Text style={{textAlign:'center',fontWeight:'bold',fontSize:15,alignItems:'center'}} >Home</Text>
          </TouchableOpacity>
        </View>
              </View>

              
          </ScrollView>
        </SafeAreaView>
      )
    }
  }