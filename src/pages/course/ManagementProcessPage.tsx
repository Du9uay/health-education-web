import React from 'react';
import { 
  Users, Briefcase, TrendingUp, Brain,
  Heart, Target, Award, CheckCircle,
  MessageSquare, UserCheck, RefreshCw, BarChart, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ManagementProcessPage: React.FC = () => {
  const careerRoles = [
    {
      title: '健康管理师',
      icon: Briefcase,
      color: 'from-emerald-400 to-teal-500',
      coreCompetencies: [
        {
          skill: '健康评估与管理流程掌握',
          description: '掌握健康管理的整体流程及常用评估工具，是进行有效干预的前提',
          importance: '★★★★★'
        },
        {
          skill: '个性化健康方案设计能力',
          description: '能因人制宜制定健康干预方案，确保科学性与客户接受度兼顾',
          importance: '★★★★★'
        },
        {
          skill: '客户沟通与信息传递技巧',
          description: '通过有效沟通建立信任，提高客户参与度与配合度',
          importance: '★★★★☆'
        },
        {
          skill: '客户关系建立与长期维护能力',
          description: '掌握客户维护技巧，增强客户黏性与长期合作可能性',
          importance: '★★★★☆'
        },
        {
          skill: '健康干预反馈与动态调整能力',
          description: '能够根据反馈及时优化管理方案，实现管理闭环',
          importance: '★★★★★'
        },
        {
          skill: '客户满意度提升策略理解',
          description: '理解客户满意的影响因素，有助于优化服务体验与服务质量',
          importance: '★★★★☆'
        }
      ],
      workContent: [
        '进行健康风险评估和分析',
        '制定个性化健康管理方案',
        '提供健康咨询和指导',
        '监测健康指标变化',
        '协调医疗资源',
        '建立健康档案'
      ],
      careerPath: '健康管理师 → 高级健康管理师 → 健康管理主管 → 健康管理总监'
    }
  ];

  const knowledgePoints = [
    {
      category: '核心理论',
      icon: Brain,
      points: [
        {
          title: '健康状态的多维度判定',
          content: '健康状态是身体、心理和社会适应均良好的综合概念，需从多维度考量'
        },
        {
          title: '健康诊断的多维度意义',
          content: '指导健康干预、早期发现隐患、制定个性化计划'
        },
        {
          title: '健康状态分类标准',
          content: '健康、亚健康、非健康的科学界定与判断标准'
        },
        {
          title: '健康管理流程',
          content: '评估、计划、监测、跟踪的完整闭环管理'
        }
      ]
    },
    {
      category: '前沿技能',
      icon: TrendingUp,
      points: [
        {
          title: '生命周期健康管理',
          content: '幼年期、青少年期、成年期、老年期不同阶段的管理重点'
        },
        {
          title: '两维度综合评估',
          content: '生理健康与心理健康的全面评估方法'
        },
        {
          title: '个性化方案制定',
          content: '基于多维度评估结果的个性化健康计划'
        }
      ]
    }
  ];

  const learningFocus = [
    {
      title: '健康状态分类及判断',
      description: '熟练掌握健康、亚健康、非健康的定义及判断标准',
      keyPoints: [
        '生理指标判断标准',
        '心理状态评估方法',
        '社会适应能力评价'
      ]
    },
    {
      title: '健康管理流程步骤',
      description: '熟悉健康评估、计划制定、监测跟踪的具体内容',
      keyPoints: [
        '信息收集技巧',
        '目标设定方法',
        '动态调整策略'
      ]
    },
    {
      title: '五大维度评估要点',
      description: '掌握生理、心理、社会、道德、环境的评估方法',
      keyPoints: [
        '基础生命体征测量',
        '系统功能判断',
        '心理认知评估',
        '社会适应评价'
      ]
    }
  ];

  const practicalApplications = [
    {
      scenario: '社区健康管理中心',
      applications: [
        '建立居民健康档案系统',
        '定期健康评估与筛查',
        '慢性病管理与预防',
        '健康教育与促进'
      ]
    },
    {
      scenario: '企业员工健康管理',
      applications: [
        '职业健康风险评估',
        '员工健康体检管理',
        '工作压力干预方案',
        '健康文化建设'
      ]
    },
    {
      scenario: '医院健康管理科',
      applications: [
        '住院患者健康评估',
        '出院后健康跟踪',
        '疾病预防指导',
        '康复计划制定'
      ]
    }
  ];

  return (
    <div className="py-8 max-w-7xl mx-auto">
      {/* 页面标题 */}
      <div className="liquid-card p-8 mb-8">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 mr-4">
            <Users className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">职业岗位与课程总结</h1>
            <p className="text-gray-600 mt-1">健康管理师职业发展与核心知识体系</p>
          </div>
        </div>
      </div>

      {/* 健康管理师岗位介绍 */}
      <section className="mb-12">
        {careerRoles.map((role, index) => (
          <div key={index} className="liquid-card p-8">
            <div className="flex items-center mb-6">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${role.color} mr-4`}>
                <role.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{role.title}</h2>
                <p className="text-gray-600">专业健康管理服务提供者</p>
              </div>
            </div>

            {/* 核心能力 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Target className="w-5 h-5 text-emerald-500 mr-2" />
                核心能力要求
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {role.coreCompetencies.map((comp, idx) => (
                  <div key={idx} className="health-card">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">{comp.skill}</h4>
                      <span className="text-amber-500 text-sm">{comp.importance}</span>
                    </div>
                    <p className="text-sm text-gray-600">{comp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 工作内容 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Briefcase className="w-5 h-5 text-blue-500 mr-2" />
                  主要工作内容
                </h3>
                <div className="space-y-2">
                  {role.workContent.map((content, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{content}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <TrendingUp className="w-5 h-5 text-purple-500 mr-2" />
                  职业发展路径
                </h3>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                  <p className="text-gray-700">{role.careerPath}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 核心知识总结 */}
      <section className="mb-12">
        <div className="liquid-card p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-500 mr-3"></div>
            核心知识体系
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {knowledgePoints.map((category, index) => (
              <div key={index}>
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-500 mr-3">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{category.category}</h3>
                </div>

                <div className="space-y-3">
                  {category.points.map((point, idx) => (
                    <div key={idx} className="health-card">
                      <h4 className="font-medium text-gray-800 mb-1">{point.title}</h4>
                      <p className="text-sm text-gray-600">{point.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 重点学习内容 */}
      <section className="mb-12">
        <div className="liquid-card p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-teal-500 mr-3"></div>
            重点学习内容
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {learningFocus.map((focus, index) => (
              <div key={index} className="health-card hover:-translate-y-1 transition-transform">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{focus.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{focus.description}</p>
                
                <div className="space-y-1">
                  {focus.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></div>
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 实践应用场景 */}
      <section className="mb-12">
        <div className="liquid-card p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-500 mr-3"></div>
            实践应用场景
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {practicalApplications.map((app, index) => (
              <div key={index} className="health-card">
                <div className="flex items-center mb-3">
                  <BarChart className="w-5 h-5 text-purple-500 mr-2" />
                  <h3 className="font-semibold text-gray-800">{app.scenario}</h3>
                </div>
                
                <div className="space-y-2">
                  {app.applications.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 学习成果展望 */}
      <section>
        <div className="liquid-card p-8 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="text-center mb-6">
            <Award className="w-16 h-16 text-amber-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">学习成果展望</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-6">
              通过本课程的系统学习，您已经掌握了健康管理的核心理论与实践技能。
              您能够准确判断健康状态，制定科学的管理方案，并持续优化健康干预效果。
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/80 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">知识技能收获</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 健康状态科学分类与判断</li>
                  <li>• 多维度健康评估技术</li>
                  <li>• 个性化方案设计能力</li>
                  <li>• 健康管理全流程操作</li>
                </ul>
              </div>

              <div className="bg-white/80 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">职业发展机遇</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 健康管理师认证资格</li>
                  <li>• 医疗健康机构就业</li>
                  <li>• 企业健康管理岗位</li>
                  <li>• 健康咨询创业机会</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 底部导航按钮 */}
      <div className="mt-12 flex justify-between items-center">
        <Link to="/course/health-assessment">
          <button className="health-btn flex items-center">
            <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
            上一章节
          </button>
        </Link>
        <Link to="/course-summary">
          <button className="health-btn flex items-center">
            进入课程总结
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ManagementProcessPage;