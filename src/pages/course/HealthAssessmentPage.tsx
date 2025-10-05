import React from 'react';
import { 
  Stethoscope, FileText, Users, Home, 
  Activity, ClipboardCheck, TrendingUp, Target,
  Clock, Calendar, RefreshCw, Settings, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HealthAssessmentPage: React.FC = () => {
  const assessmentSteps = [
    {
      title: '收集基本信息',
      icon: FileText,
      description: '收集学员基本信息，包括姓名、年龄、性别、联系方式等',
      methods: '通过纸质表格或电子问卷方式收集',
      importance: '是健康档案建立的基础',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: '了解病史',
      icon: ClipboardCheck,
      description: '询问学员既往病史、家族病史等',
      methods: '通过与学员及其家属沟通获取信息',
      importance: '了解健康风险，如发现家族高血压病史需重点关注血压',
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: '生活方式评估',
      icon: Activity,
      description: '评估营养饮食、体育锻炼、睡眠质量、健康风险行为',
      methods: '使用饮食问卷、运动日志等评估工具',
      importance: '识别生活方式中的健康风险因素',
      color: 'from-emerald-400 to-teal-500'
    },
    {
      title: '家族病史调查',
      icon: Users,
      description: '详细调查直系和旁系亲属健康情况',
      methods: '与学员及家属深入沟通',
      importance: '了解遗传疾病史，提前预防相关疾病',
      color: 'from-amber-400 to-orange-500'
    },
    {
      title: '体格检查',
      icon: Stethoscope,
      description: '进行基本体格检查，包括身高、体重、血压、心率等',
      methods: '使用规范测量方法和设备',
      importance: '初步了解学员生理健康状况',
      color: 'from-red-400 to-rose-500'
    }
  ];

  const healthPlanElements = [
    {
      title: '目标设定',
      icon: Target,
      description: '设定具体、可衡量、可实现、相关联、有时限的健康目标',
      example: '针对血压偏高学员，设定三个月内将血压控制在正常范围的目标',
      principles: ['具体性 (Specific)', '可衡量性 (Measurable)', '可实现性 (Achievable)', '相关性 (Relevant)', '时限性 (Time-bound)']
    },
    {
      title: '制定计划',
      icon: ClipboardCheck,
      description: '根据健康目标制定详细健康计划',
      example: '制定饮食调整（减少盐摄入）、增加运动（每周至少三次有氧运动）、定期监测血压等计划',
      principles: ['个性化定制', '科学性原则', '可操作性', '循序渐进']
    },
    {
      title: '时间安排',
      icon: Calendar,
      description: '合理安排健康计划的实施时间',
      example: '每周运动3次、每月复查1次、每季度全面评估',
      principles: ['规律性', '持续性', '灵活调整', '阶段性评估']
    },
    {
      title: '资源调配',
      icon: Settings,
      description: '调配相关资源支持健康计划实施',
      example: '配备营养师提供饮食建议、运动教练提供运动指导',
      principles: ['医疗资源', '营养资源', '运动资源', '心理支持']
    }
  ];

  const monitoringProcess = [
    {
      step: '定期复诊',
      frequency: '每月或每季度',
      content: '按照健康计划安排，定期回访进行健康评估',
      purpose: '跟踪健康变化情况'
    },
    {
      step: '检测健康指标',
      frequency: '根据需要定期检测',
      content: '检测血压、血糖、血脂等关键指标',
      purpose: '了解健康计划实施效果'
    },
    {
      step: '评估结果',
      frequency: '每次检测后',
      content: '评估指标变化和生活方式改善情况',
      purpose: '判断是否达到预期目标'
    },
    {
      step: '调整计划',
      frequency: '根据评估结果',
      content: '若效果不理想，及时调整干预措施',
      purpose: '确保达到健康目标'
    }
  ];

  const practicalCases = [
    {
      title: '高血压风险管理',
      scenario: '45岁男性，血压140/90mmHg，有家族史',
      assessment: '收集基本信息、测量血压、评估生活方式、调查家族史',
      plan: '低盐饮食、每周运动150分钟、减重5kg、戒烟限酒',
      monitoring: '每周测血压2次、每月复诊、3个月后全面评估'
    },
    {
      title: '儿童生长发育评估',
      scenario: '3岁儿童，身高体重低于同龄标准',
      assessment: '测量生长指标、营养状况评估、发育里程碑检查',
      plan: '个性化营养补充方案、增加蛋白质摄入、补充维生素D',
      monitoring: '每月测量身高体重、每季度发育评估、定期营养咨询'
    },
    {
      title: '代谢综合征预防',
      scenario: '35岁白领，BMI 28，血糖偏高',
      assessment: 'BMI计算、血糖血脂检测、饮食运动习惯调查',
      plan: '控制总热量摄入、增加有氧运动、改善作息时间',
      monitoring: '每2周测体重、每月查血糖、定期代谢指标评估'
    }
  ];

  return (
    <div className="py-8 max-w-7xl mx-auto">
      {/* 页面标题 */}
      <div className="liquid-card p-8 mb-8">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 mr-4">
            <Stethoscope className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">健康管理的基本流程</h1>
            <p className="text-gray-600 mt-1">系统掌握健康评估、计划制定、监测跟踪全流程</p>
          </div>
        </div>
      </div>

      {/* 健康评估流程 */}
      <section className="mb-12">
        <div className="liquid-card p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-teal-500 mr-3"></div>
            健康评估流程
          </h2>
          
          <div className="space-y-4">
            {assessmentSteps.map((step, index) => (
              <div key={index} className="health-card hover:-translate-y-1 transition-transform">
                <div className="flex items-start">
                  <div className="flex items-center justify-center mr-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color}`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl font-bold text-gray-300 mr-3">{index + 1}</span>
                      <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                    </div>
                    
                    <p className="text-gray-700 mb-3">{step.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <span className="font-medium text-blue-700">方法：</span>
                        <span className="text-blue-600 ml-1">{step.methods}</span>
                      </div>
                      <div className="bg-emerald-50 p-3 rounded-lg">
                        <span className="font-medium text-emerald-700">意义：</span>
                        <span className="text-emerald-600 ml-1">{step.importance}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 制定健康计划 */}
      <section className="mb-12">
        <div className="liquid-card p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-500 mr-3"></div>
            制定健康计划
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {healthPlanElements.map((element, index) => (
              <div key={index} className="health-card">
                <div className="flex items-start mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-500 mr-3">
                    <element.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{element.title}</h3>
                </div>
                
                <p className="text-gray-700 mb-3">{element.description}</p>
                
                <div className="bg-gray-50 p-3 rounded-lg mb-3">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-gray-700">案例：</span>
                    {element.example}
                  </p>
                </div>
                
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-700">核心原则：</p>
                  <div className="flex flex-wrap gap-2">
                    {element.principles.map((principle, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-md">
                        {principle}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 健康监测和跟踪 */}
      <section className="mb-12">
        <div className="liquid-card p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-500 mr-3"></div>
            健康监测和跟踪
          </h2>
          
          <div className="relative">
            {/* 流程线 */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-500"></div>
            
            <div className="space-y-6">
              {monitoringProcess.map((process, index) => (
                <div key={index} className="flex items-start">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg border-4 border-purple-400">
                    <span className="text-xl font-bold text-purple-600">{index + 1}</span>
                  </div>
                  
                  <div className="ml-6 flex-1 health-card">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{process.step}</h3>
                      <span className="text-sm px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                        {process.frequency}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-2">{process.content}</p>
                    
                    <div className="flex items-center text-sm text-gray-600">
                      <RefreshCw className="w-4 h-4 mr-1 text-purple-500" />
                      <span>{process.purpose}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 实践案例 */}
      <section className="mb-12">
        <div className="liquid-card p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-amber-400 to-orange-500 mr-3"></div>
            实践案例分析
          </h2>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
            {practicalCases.map((case_, index) => (
              <div key={index} className="health-card hover:-translate-y-1 transition-transform">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{case_.title}</h3>
                
                <div className="space-y-3 text-sm">
                  <div className="pb-3 border-b border-gray-200">
                    <p className="font-medium text-gray-700 mb-1">场景描述</p>
                    <p className="text-gray-600">{case_.scenario}</p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-700 mb-1">评估要点</p>
                    <p className="text-gray-600">{case_.assessment}</p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-700 mb-1">干预计划</p>
                    <p className="text-gray-600">{case_.plan}</p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-700 mb-1">监测方案</p>
                    <p className="text-gray-600">{case_.monitoring}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 流程总结 */}
      <section>
        <div className="liquid-card p-8 bg-gradient-to-br from-purple-50 to-pink-50">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">流程要点总结</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 mb-3">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">健康评估</h3>
              <p className="text-sm text-gray-600">全面收集信息，科学评估健康状态</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 mb-3">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">计划制定</h3>
              <p className="text-sm text-gray-600">个性化方案，SMART目标设定</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 mb-3">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">监测跟踪</h3>
              <p className="text-sm text-gray-600">持续监测，动态调整优化</p>
            </div>
          </div>
        </div>
      </section>

      {/* 底部导航按钮 */}
      <div className="mt-12 flex justify-between items-center">
        <Link to="/course/health-dimensions">
          <button className="health-btn flex items-center">
            <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
            上一章节
          </button>
        </Link>
        <Link to="/course/management-process">
          <button className="health-btn flex items-center">
            下一章节
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HealthAssessmentPage;