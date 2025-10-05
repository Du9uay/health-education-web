import React from 'react';
import { Heart, AlertCircle, Activity, TrendingUp, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HealthStatusPage: React.FC = () => {
  const healthStates = [
    {
      title: '健康',
      icon: Heart,
      color: 'from-emerald-400 to-teal-500',
      definition: '身体各系统功能正常，心理状态良好，能适应社会环境的状态',
      criteria: [
        '生理：基础生命体征正常（体温36-37°C、脉搏60-100次/分、呼吸12-20次/分、血压<140/90mmHg）',
        '心理：情绪状态良好，经SDS、SAS评估标准分正常',
        '社会适应：能良好参与社会活动'
      ],
      example: '成年人各项生理指标正常、心理情绪稳定且能良好适应工作和社会生活'
    },
    {
      title: '亚健康',
      icon: AlertCircle,
      color: 'from-amber-400 to-orange-500',
      definition: '处于健康与疾病之间的中间状态，身体有轻微不适但未达疾病诊断标准',
      criteria: [
        '生理：有轻微指标异常（如血脂、血糖稍超出正常范围但未达疾病诊断值）',
        '心理：有轻微情绪波动但未达心理疾病程度',
        '社会适应：有轻微不适应'
      ],
      example: '居民血脂略高于正常范围但未达高血脂症诊断标准，且感觉容易疲劳'
    },
    {
      title: '非健康',
      icon: Activity,
      color: 'from-red-400 to-rose-500',
      definition: '已处疾病状态或健康严重受损的状态',
      criteria: [
        '生理：有明确疾病诊断指标（如高血压患者血压持续≥140/90mmHg）',
        '心理：有严重情绪障碍（如抑郁症患者SDS标准分远高于正常范围）',
        '社会适应：严重受损，无法正常参与社会活动'
      ],
      example: '居民被诊断为高血压病且心理有严重抑郁情绪'
    }
  ];

  const lifeCycles = [
    {
      stage: '幼年期',
      icon: Users,
      characteristics: '生长发育迅速，免疫系统发展关键期',
      focus: '营养与预防接种是重点',
      management: '通过测量身高、体重等指标评估生长发育，确保充足营养摄入，按时接种疫苗'
    },
    {
      stage: '青少年期',
      icon: TrendingUp,
      characteristics: '身体各系统逐渐成熟，精力旺盛',
      focus: '心理社会发展关键时期',
      management: '关注心血管、代谢功能发育，重视心理状态和社会适应能力培养'
    },
    {
      stage: '成年期',
      icon: Clock,
      characteristics: '生理功能稳定期，工作压力大',
      focus: '慢性病风险开始增加',
      management: '定期监测血压、血脂、血糖等指标，帮助缓解工作压力，制定健康生活方式'
    },
    {
      stage: '老年期',
      icon: CheckCircle,
      characteristics: '生理功能逐渐衰退',
      focus: '慢性病和功能障碍风险高',
      management: '监测呼吸、肝肾功能，评估认知能力，提高社会参与度，预防慢性病'
    }
  ];

  const healthDiagnosticSignificance = [
    {
      title: '指导健康干预',
      description: '为临床决策提供依据',
      example: '发现血压异常升高时，为医生制定干预措施提供依据，如调整饮食、增加运动等'
    },
    {
      title: '预防疾病',
      description: '早期发现健康隐患',
      example: '通过代谢功能评估发现血糖升高趋势，及时采取预防措施，预防糖尿病'
    },
    {
      title: '制定个性化健康计划',
      description: '根据评估结果定制方案',
      example: '针对幼年期学员营养摄入问题，制定个性化营养补充计划'
    }
  ];

  return (
    <div className="py-8 max-w-7xl mx-auto">
      {/* 页面标题 */}
      <div className="liquid-card p-8 mb-8">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 mr-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">健康状态分类与界定</h1>
            <p className="text-gray-600 mt-1">掌握健康状态的科学分类与判断标准</p>
          </div>
        </div>
      </div>

      {/* 健康状态的定义 */}
      <section className="mb-12">
        <div className="liquid-card p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-teal-500 mr-3"></div>
            健康状态的定义
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            健康状态是一个综合概念，指身体、心理和社会适应均处于良好的状态。
          </p>
          <div className="health-card p-6 mt-4">
            <h3 className="font-semibold text-gray-800 mb-2">实践案例</h3>
            <p className="text-gray-600">
              在社区健康管理中心的健康评估系统中，健康状态的判定需从多维度考量。
              通过健康档案记录学员的各项基础信息、生理指标等，全面界定健康状态的内涵。
            </p>
          </div>
        </div>
      </section>

      {/* 健康诊断的意义 */}
      <section className="mb-12">
        <div className="liquid-card p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-500 mr-3"></div>
            健康诊断的意义
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {healthDiagnosticSignificance.map((item, index) => (
              <div key={index} className="health-card">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mb-3">{item.description}</p>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">案例：</span>{item.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 健康状态的基本分类 */}
      <section className="mb-12">
        <div className="liquid-card p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-500 mr-3"></div>
            健康状态的基本分类
          </h2>
          <div className="space-y-6">
            {healthStates.map((state, index) => (
              <div key={index} className="health-card hover:-translate-y-1 transition-transform">
                <div className="flex items-start">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${state.color} mr-4 flex-shrink-0`}>
                    <state.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{state.title}</h3>
                    <p className="text-gray-700 mb-4">{state.definition}</p>
                    
                    <div className="space-y-2 mb-4">
                      <h4 className="font-medium text-gray-800">判断标准：</h4>
                      {state.criteria.map((criterion, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                          <p className="text-sm text-gray-600">{criterion}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gradient-to-r from-gray-50 to-transparent p-3 rounded-lg">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium text-gray-700">示例：</span>{state.example}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 健康状态与生命周期 */}
      <section className="mb-12">
        <div className="liquid-card p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-amber-400 to-orange-500 mr-3"></div>
            健康状态与生命周期
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {lifeCycles.map((cycle, index) => (
              <div key={index} className="health-card hover:-translate-y-1 transition-transform">
                <div className="flex items-start mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 mr-3">
                    <cycle.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{cycle.stage}</h3>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-700">特点：</p>
                    <p className="text-sm text-gray-600">{cycle.characteristics}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700">重点：</p>
                    <p className="text-sm text-gray-600">{cycle.focus}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700">管理方法：</p>
                    <p className="text-sm text-gray-600">{cycle.management}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 学习要点总结 */}
      <section>
        <div className="liquid-card p-8 bg-gradient-to-br from-emerald-50 to-teal-50">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">本节要点</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-gray-700">掌握健康、亚健康、非健康三种状态的定义与判断标准</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-gray-700">理解健康诊断在临床决策、疾病预防中的重要意义</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-gray-700">熟悉不同生命周期阶段的健康管理重点</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-gray-700">能够根据多维度指标综合评估个体健康状态</p>
            </div>
          </div>
        </div>
      </section>

      {/* 底部导航按钮 */}
      <div className="mt-12 flex justify-between items-center">
        <Link to="/careers">
          <button className="health-btn flex items-center">
            <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
            返回职业发展
          </button>
        </Link>
        <Link to="/course/health-dimensions">
          <button className="health-btn flex items-center">
            下一章节
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HealthStatusPage;