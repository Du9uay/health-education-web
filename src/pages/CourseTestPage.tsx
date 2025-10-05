import React, { useState } from 'react';
import { CheckCircle, XCircle, AlertCircle, Award, RefreshCw, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseTestPage: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const multipleChoiceQuestions = [
    {
      id: 'mc1',
      question: '健康状态分为哪几类？',
      options: [
        'A. 健康、亚健康、非健康',
        'B. 健康、疾病、非健康',
        'C. 健康、亚健康、疾病',
        'D. 亚健康、非健康、正常'
      ],
      correct: 'A',
      explanation: '健康状态的科学分类为健康、亚健康、非健康三种状态'
    },
    {
      id: 'mc2',
      question: '成人静息时脉搏正常范围是？',
      options: [
        'A. 50-90次/分',
        'B. 60-100次/分',
        'C. 70-110次/分',
        'D. 80-120次/分'
      ],
      correct: 'B',
      explanation: '成人静息脉搏的正常范围是60-100次/分'
    },
    {
      id: 'mc3',
      question: '正常人群SDS标准分应小于多少？',
      options: [
        'A. 50分',
        'B. 53分',
        'C. 60分',
        'D. 65分'
      ],
      correct: 'B',
      explanation: 'SDS（抑郁自评量表）正常人群标准分应小于53分'
    }
  ];

  const fillInQuestions = [
    {
      id: 'fill1',
      question: '成人正常血压应小于_____mmHg。',
      answer: '140/90',
      userAnswer: ''
    },
    {
      id: 'fill2',
      question: '健康管理基本流程包含健康评估、_____、健康监测和跟踪。',
      answer: '制定健康计划',
      userAnswer: ''
    },
    {
      id: 'fill3',
      question: '幼年期健康管理重点关注_____和预防接种。',
      answer: '生长发育',
      userAnswer: ''
    }
  ];

  const matchingQuestion = {
    left: [
      { id: 'h1', text: '健康', matched: false },
      { id: 'h2', text: '亚健康', matched: false },
      { id: 'h3', text: '非健康', matched: false }
    ],
    right: [
      { id: 'r1', text: 'A. 身体各系统功能正常、心理良好、适应社会', correctMatch: 'h1' },
      { id: 'r2', text: 'B. 处于健康与疾病中间状态，有轻微不适但无疾病诊断标准', correctMatch: 'h2' },
      { id: 'r3', text: 'C. 已处疾病或健康严重受损状态', correctMatch: 'h3' }
    ]
  };

  const pairingQuestion = {
    tools: ['SDS', 'SAS', 'MMSE', 'MoCA'],
    dimensions: [
      { tool: 'SDS', dimension: '情绪状态评估（抑郁）' },
      { tool: 'SAS', dimension: '情绪状态评估（焦虑）' },
      { tool: 'MMSE', dimension: '认知功能评估' },
      { tool: 'MoCA', dimension: '认知功能评估' }
    ]
  };

  const orderingQuestion = {
    items: [
      { id: 1, text: '健康监测和跟踪', order: 3 },
      { id: 2, text: '制定健康计划', order: 2 },
      { id: 3, text: '健康评估', order: 1 }
    ]
  };

  const handleSubmit = () => {
    let correctCount = 0;
    
    // 评分逻辑
    multipleChoiceQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correct) correctCount++;
    });
    
    // 这里简化处理，实际应该有更复杂的评分逻辑
    const totalScore = Math.round((correctCount / multipleChoiceQuestions.length) * 100);
    setScore(totalScore);
    setShowResults(true);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  };

  return (
    <div className="py-8 max-w-7xl mx-auto">
      {/* 页面标题 */}
      <div className="liquid-card p-8 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 mr-4">
              <AlertCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">课堂测试</h1>
              <p className="text-gray-600 mt-1">检验学习成果，巩固知识要点</p>
            </div>
          </div>
          
          {showResults && (
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">{score}分</div>
              <p className="text-sm text-gray-600">测试得分</p>
            </div>
          )}
        </div>
      </div>

      {/* 选择题 */}
      <section className="mb-12">
        <div className="liquid-card p-8">
          <h2 className="text-xl font-bold mb-6 text-gray-800">一、选择题（难度：低）</h2>
          
          <div className="space-y-6">
            {multipleChoiceQuestions.map((q, index) => (
              <div key={q.id} className="health-card">
                <div className="mb-3">
                  <span className="font-semibold text-gray-800">
                    {index + 1}. {q.question}
                  </span>
                </div>
                
                <div className="space-y-2">
                  {q.options.map((option) => (
                    <label key={option} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name={q.id}
                        value={option[0]}
                        checked={selectedAnswers[q.id] === option[0]}
                        onChange={(e) => setSelectedAnswers({
                          ...selectedAnswers,
                          [q.id]: e.target.value
                        })}
                        className="mr-3 text-emerald-500"
                        disabled={showResults}
                      />
                      <span className={`${
                        showResults && option[0] === q.correct
                          ? 'text-emerald-600 font-medium'
                          : showResults && selectedAnswers[q.id] === option[0] && option[0] !== q.correct
                          ? 'text-red-600'
                          : 'text-gray-700'
                      }`}>
                        {option}
                      </span>
                      {showResults && option[0] === q.correct && (
                        <CheckCircle className="w-4 h-4 text-emerald-500 ml-2" />
                      )}
                      {showResults && selectedAnswers[q.id] === option[0] && option[0] !== q.correct && (
                        <XCircle className="w-4 h-4 text-red-500 ml-2" />
                      )}
                    </label>
                  ))}
                </div>
                
                {showResults && (
                  <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-700">
                      <span className="font-medium">解析：</span>{q.explanation}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 填空题 */}
      <section className="mb-12">
        <div className="liquid-card p-8">
          <h2 className="text-xl font-bold mb-6 text-gray-800">二、填空题（难度：中）</h2>
          
          <div className="space-y-4">
            {fillInQuestions.map((q, index) => (
              <div key={q.id} className="health-card">
                <p className="text-gray-800 mb-2">
                  {index + 1}. {q.question}
                </p>
                {showResults && (
                  <p className="text-sm text-emerald-600">
                    答案：{q.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 连线题 */}
      <section className="mb-12">
        <div className="liquid-card p-8">
          <h2 className="text-xl font-bold mb-6 text-gray-800">三、连线题（难度：高）</h2>
          
          <div className="health-card">
            <p className="mb-4 text-gray-800">请将左侧健康状态与右侧判断标准连线：</p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-3">
                <h3 className="font-medium text-gray-700 mb-2">健康状态</h3>
                {matchingQuestion.left.map((item) => (
                  <div key={item.id} className="p-3 bg-emerald-50 rounded-lg">
                    {item.text}
                  </div>
                ))}
              </div>
              
              <div className="space-y-3">
                <h3 className="font-medium text-gray-700 mb-2">判断标准</h3>
                {matchingQuestion.right.map((item) => (
                  <div key={item.id} className="p-3 bg-blue-50 rounded-lg text-sm">
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
            
            {showResults && (
              <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                <p className="text-sm text-emerald-700">
                  答案：健康-A, 亚健康-B, 非健康-C
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 词义配对题 */}
      <section className="mb-12">
        <div className="liquid-card p-8">
          <h2 className="text-xl font-bold mb-6 text-gray-800">四、词义配对题（难度：中）</h2>
          
          <div className="health-card">
            <p className="mb-4 text-gray-800">将以下心理评估工具与对应评估维度配对：</p>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              {pairingQuestion.tools.map((tool) => (
                <div key={tool} className="p-3 bg-purple-50 rounded-lg text-center">
                  {tool}
                </div>
              ))}
            </div>
            
            {showResults && (
              <div className="p-3 bg-purple-50 rounded-lg">
                <p className="text-sm text-purple-700">
                  答案：SDS-情绪状态评估（抑郁），SAS-情绪状态评估（焦虑），MMSE-认知功能评估，MoCA-认知功能评估
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 排序题 */}
      <section className="mb-12">
        <div className="liquid-card p-8">
          <h2 className="text-xl font-bold mb-6 text-gray-800">五、排序题（难度：高）</h2>
          
          <div className="health-card">
            <p className="mb-4 text-gray-800">将健康管理基本流程按顺序排序：</p>
            
            <div className="space-y-2 mb-4">
              {orderingQuestion.items.map((item) => (
                <div key={item.id} className="p-3 bg-amber-50 rounded-lg flex items-center">
                  <span className="font-medium text-amber-700 mr-3">①</span>
                  {item.text}
                </div>
              ))}
            </div>
            
            {showResults && (
              <div className="p-3 bg-amber-50 rounded-lg">
                <p className="text-sm text-amber-700">
                  答案：③健康评估 → ②制定健康计划 → ①健康监测和跟踪
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 操作按钮 */}
      <div className="flex justify-center gap-4">
        {!showResults ? (
          <button
            onClick={handleSubmit}
            className="health-btn flex items-center"
          >
            <Award className="w-5 h-5 mr-2" />
            提交答案
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="health-btn flex items-center"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            重新测试
          </button>
        )}
      </div>

      {/* 底部导航按钮 */}
      <div className="mt-12 flex justify-between items-center">
        <Link to="/course-summary">
          <button className="health-btn flex items-center">
            <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
            返回课程总结
          </button>
        </Link>
        <Link to="/homework">
          <button className="health-btn flex items-center">
            进入课后作业
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseTestPage;