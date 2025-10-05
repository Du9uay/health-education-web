import React from 'react';
import { 
  Activity, Brain, Heart, Thermometer, 
  Wind, Droplets, Zap, TrendingUp,
  Smile, Frown, AlertCircle, CheckCircle, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HealthDimensionsPage: React.FC = () => {
  const vitalSigns = [
    {
      name: '体温',
      normal: '36-37°C',
      measurement: '口腔、腋窝、直肠等部位测量',
      method: '腋窝测量需夹紧5-10分钟',
      significance: '体温变化可反映感染、代谢异常等病理状态',
      icon: Thermometer
    },
    {
      name: '脉搏',
      normal: '60-100次/分',
      measurement: '通常在桡动脉处测量',
      method: '轻按手腕桡动脉处计数1分钟',
      significance: '脉搏异常可提示心律失常、循环功能异常',
      icon: Activity
    },
    {
      name: '呼吸',
      normal: '12-20次/分',
      measurement: '观察呼吸频率、节律、深度',
      method: '在患者不知情下进行观察',
      significance: '呼吸异常可能提示呼吸系统疾病、代谢紊乱',
      icon: Wind
    },
    {
      name: '血压',
      normal: '<140/90mmHg',
      measurement: '使用标准血压计测量',
      method: '静坐休息5分钟后测量，上臂与心脏同一水平',
      significance: '持续升高可能提示高血压，与多种疾病相关',
      icon: Heart
    }
  ];

  const bodySystems = [
    {
      system: '心血管功能',
      indicators: ['血压', '心率', '血脂'],
      assessment: '定期测量血压心率，检测血脂水平',
      abnormal: '血脂异常升高时建议调整饮食和生活方式'
    },
    {
      system: '代谢功能',
      indicators: ['血糖', '体重指数(BMI)'],
      assessment: '监测血糖和计算BMI',
      abnormal: '及时发现糖尿病、肥胖等代谢性疾病风险'
    },
    {
      system: '呼吸功能',
      indicators: ['肺活量', '血氧饱和度'],
      assessment: '使用肺活量计和脉搏血氧仪',
      abnormal: '肺活量下降提示呼吸系统疾病'
    },
    {
      system: '肝肾功能',
      indicators: ['转氨酶', '肌酐', '尿素氮'],
      assessment: '通过血液检测获得相关指标',
      abnormal: '转氨酶升高提示肝脏受损，肌酐升高提示肾功能异常'
    }
  ];

  const mentalHealthDimensions = [
    {
      title: '情绪状态',
      icon: Smile,
      fullDescription: '情绪状态是个体在一定情境下所表现出的情感体验和反应，它对人的身心健康、人际关系和日常生活有着重要影响。',
      aspects: [
        {
          name: '积极情绪',
          description: '如喜悦、快乐、满足、希望等',
          detailedExplanation: '积极情绪能让人感受到生活的美好，增强自信心和创造力，提升应对压力的能力。当人处于积极情绪中时，思维会更加灵活，更容易与他人建立良好的关系，对生活充满热情。',
          example: '在完成一项有挑战性的任务后，人们会体验到成功的喜悦，这种积极情绪会激励他们继续努力追求更高的目标。'
        },
        {
          name: '消极情绪',
          description: '包括悲伤、愤怒、焦虑、恐惧、抑郁等',
          detailedExplanation: '适度的消极情绪是正常的心理反应，能帮助人们认识到问题的存在并采取相应的应对措施。但长期或过度的消极情绪则会对身心健康造成损害，可能导致失眠、食欲不振、注意力不集中等问题，甚至引发心理疾病。',
          example: '长期处于焦虑状态的人，可能会出现心悸、手抖等生理症状，影响正常的工作和生活。'
        },
        {
          name: '情绪的稳定性',
          description: '指情绪的起伏程度和持续时间',
          detailedExplanation: '情绪稳定的人能够较好地控制自己的情绪，不会因为一些小事而出现剧烈的情绪波动。而情绪不稳定的人则容易受到外界因素的影响，情绪忽高忽低，难以保持平和的心态。情绪的稳定性与个体的性格、生活经历、应对方式等因素有关。',
          example: '情绪稳定的人面对挫折能保持冷静，理性分析问题并寻找解决方案。'
        }
      ]
    },
    {
      title: '认知功能',
      icon: Brain,
      fullDescription: '认知功能是指个体接收、加工、储存和提取信息的能力，它是人类进行各种心理活动的基础。',
      aspects: [
        {
          name: '感知觉',
          description: '是认知的起点，包括感觉和知觉',
          detailedExplanation: '感觉是对事物个别属性的反映，如视觉、听觉、嗅觉、味觉、触觉等；知觉则是对事物整体属性的反映，是在感觉的基础上形成的。良好的感知觉能力能帮助个体准确地认识周围的世界。',
          example: '通过视觉感知物体的颜色、形状和大小，通过听觉辨别不同的声音。'
        },
        {
          name: '记忆',
          description: '是个体对过去经验的保持和再现',
          detailedExplanation: '根据记忆保持时间的长短，可分为瞬时记忆、短时记忆和长时记忆。记忆在学习、工作和生活中起着至关重要的作用，无论是知识的积累、技能的掌握还是经验的借鉴，都离不开记忆。',
          example: '学生需要记忆各种知识来应对考试，医生需要记忆大量的医学知识来诊断病情。'
        },
        {
          name: '思维',
          description: '是对客观事物间接的、概括的反映',
          detailedExplanation: '它能帮助个体分析问题、解决问题，进行创造性的活动。思维的形式包括概念、判断、推理等。具有良好思维能力的人，能够透过现象看本质，从复杂的问题中找到关键所在。',
          example: '科学家通过严谨的思维进行科学研究，提出新的理论和观点。'
        },
        {
          name: '注意力',
          description: '是心理活动对一定对象的指向和集中',
          detailedExplanation: '注意力集中的人能够高效地完成任务，而注意力不集中则会影响学习和工作效率。注意力还可以分为无意注意、有意注意和有意后注意等不同类型，在不同的活动中需要运用不同类型的注意力。',
          example: '在学习时保持注意力集中，能够更好地理解和记忆知识内容。'
        }
      ]
    },
    {
      title: '适应能力',
      icon: Zap,
      fullDescription: '适应能力是个体在面对环境变化和生活事件时，能够调整自身的心理和行为，以保持心理平衡和正常生活的能力。',
      aspects: [
        {
          name: '对环境变化的适应',
          description: '环境包括自然环境和社会环境',
          detailedExplanation: '当人们从一个熟悉的环境转移到一个陌生的环境时，需要适应新的气候、地形、人际关系等。',
          example: '有些人到异地求学或工作，可能会出现水土不服、思乡等情况，但通过一段时间的调整，大多数人都能逐渐适应新的环境。'
        },
        {
          name: '对生活事件的应对',
          description: '生活中难免会遇到各种生活事件',
          detailedExplanation: '如升学、就业、结婚、离婚、亲人离世等。这些事件可能会给人带来压力和挑战，适应能力强的人能够积极面对，采取有效的应对措施，尽快从事件的影响中走出来。而适应能力弱的人则可能会陷入困境，无法正常生活。',
          example: '面对失业的打击，有些人能够及时调整心态，积极寻找新的工作机会，而有些人则可能会一蹶不振，产生消极的情绪。'
        },
        {
          name: '人际交往适应',
          description: '人是社会性动物，需要与他人进行交往',
          detailedExplanation: '良好的人际交往适应能力能让人在社交场合中表现得得体、自信，建立良好的人际关系。这包括能够理解他人的情感和意图，善于表达自己的想法和感受，学会与不同性格的人相处等。在人际交往中，能够适应不同的社交情境和人际关系模式，是个体适应社会的重要体现。',
          example: '在不同的社交场合能够灵活调整交流方式，与不同背景的人建立良好关系。'
        }
      ]
    }
  ];

  return (
    <div className="py-8 max-w-7xl mx-auto">
      {/* 页面标题 */}
      <div className="liquid-card p-8 mb-8">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 mr-4">
            <Activity className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">健康的两个维度</h1>
            <p className="text-gray-600 mt-1">全面掌握生理健康与心理健康的评估方法</p>
          </div>
        </div>
      </div>

      {/* 生理健康 - 基础生命体征 */}
      <section className="mb-12">
        <div className="liquid-card p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-teal-500 mr-3"></div>
            生理健康 - 基础生命体征判断
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {vitalSigns.map((sign, index) => (
              <div key={index} className="health-card hover:-translate-y-1 transition-transform">
                <div className="flex items-start mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 mr-3">
                    <sign.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">{sign.name}</h3>
                    <p className="text-emerald-600 font-medium">{sign.normal}</p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">测量部位：</span>
                    <span className="text-gray-600 ml-1">{sign.measurement}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">测量方法：</span>
                    <span className="text-gray-600 ml-1">{sign.method}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">临床意义：</span>
                    <span className="text-gray-600 ml-1">{sign.significance}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 生理健康 - 身体系统功能 */}
      <section className="mb-12">
        <div className="liquid-card p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-500 mr-3"></div>
            身体各系统功能状态判断
          </h2>
          
          <div className="space-y-4">
            {bodySystems.map((system, index) => (
              <div key={index} className="health-card">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{system.system}</h3>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">主要指标</p>
                    <div className="flex flex-wrap gap-2">
                      {system.indicators.map((indicator, idx) => (
                        <span key={idx} className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-md text-xs">
                          {indicator}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">评估方法</p>
                    <p className="text-sm text-gray-600">{system.assessment}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">异常提示</p>
                    <p className="text-sm text-gray-600">{system.abnormal}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 心理健康维度 */}
      <section className="mb-12">
        <div className="liquid-card p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-500 mr-3"></div>
            心理健康评估维度
          </h2>
          
          {mentalHealthDimensions.map((dimension, index) => (
            <div key={index} className="mb-8">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 mr-3">
                  <dimension.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{dimension.title}</h3>
              </div>
              
              {dimension.fullDescription && (
                <p className="text-gray-700 mb-4 leading-relaxed">{dimension.fullDescription}</p>
              )}
              
              <div className="space-y-4">
                {dimension.aspects.map((aspect, idx) => (
                  <div key={idx} className="health-card">
                    <h4 className="font-semibold text-gray-800 mb-2">{aspect.name}</h4>
                    <p className="text-gray-600 mb-2">{aspect.description}</p>
                    
                    <div className="bg-blue-50 p-3 rounded-lg mb-2">
                      <p className="text-sm text-gray-700 leading-relaxed">{aspect.detailedExplanation}</p>
                    </div>
                    
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium text-gray-700">示例：</span>
                        {aspect.example}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 综合评估要点 */}
      <section>
        <div className="liquid-card p-8 bg-gradient-to-br from-blue-50 to-cyan-50">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">综合评估要点</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-800 flex items-center">
                <Heart className="w-5 h-5 text-emerald-500 mr-2" />
                生理健康评估
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">掌握四大基础生命体征的测量方法与正常范围</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">了解心血管、代谢、呼吸、肝肾功能评估指标</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">能够识别生理指标异常并采取相应措施</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-800 flex items-center">
                <Brain className="w-5 h-5 text-purple-500 mr-2" />
                心理健康评估
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">识别积极与消极情绪，评估情绪稳定性</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">评估认知功能包括感知、记忆、思维、注意力</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">判断环境适应、生活应对、人际交往能力</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 底部导航按钮 */}
      <div className="mt-12 flex justify-between items-center">
        <Link to="/course/health-status">
          <button className="health-btn flex items-center">
            <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
            上一章节
          </button>
        </Link>
        <Link to="/course/health-assessment">
          <button className="health-btn flex items-center">
            下一章节
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HealthDimensionsPage;