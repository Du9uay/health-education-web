import React, { useState } from 'react';
import { CheckCircle, XCircle, AlertCircle, Award, RefreshCw, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseTestPage: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  // 所有题目都是选择题
  const allQuestions = [
    // 第一部分：基础知识选择题
    {
      id: 'q1',
      section: '一、基础知识选择题',
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
      id: 'q2',
      section: '一、基础知识选择题',
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
      id: 'q3',
      section: '一、基础知识选择题',
      question: '正常人群SDS标准分应小于多少？',
      options: [
        'A. 50分',
        'B. 53分',
        'C. 60分',
        'D. 65分'
      ],
      correct: 'B',
      explanation: 'SDS（抑郁自评量表）正常人群标准分应小于53分'
    },

    // 第二部分：健康标准选择题（原填空题）
    {
      id: 'q4',
      section: '二、健康标准选择题',
      question: '成人正常血压应小于多少mmHg？',
      options: [
        'A. 120/80',
        'B. 130/85',
        'C. 140/90',
        'D. 150/95'
      ],
      correct: 'C',
      explanation: '成人正常血压应小于140/90 mmHg'
    },
    {
      id: 'q5',
      section: '二、健康标准选择题',
      question: '健康管理基本流程包含健康评估、_____、健康监测和跟踪？',
      options: [
        'A. 疾病诊断',
        'B. 制定健康计划',
        'C. 药物治疗',
        'D. 康复训练'
      ],
      correct: 'B',
      explanation: '健康管理基本流程包含健康评估、制定健康计划、健康监测和跟踪'
    },
    {
      id: 'q6',
      section: '二、健康标准选择题',
      question: '幼年期健康管理重点关注什么和预防接种？',
      options: [
        'A. 心理健康',
        'B. 生长发育',
        'C. 营养搭配',
        'D. 运动锻炼'
      ],
      correct: 'B',
      explanation: '幼年期健康管理重点关注生长发育和预防接种'
    },

    // 第三部分：健康状态判断选择题（原连线题）
    {
      id: 'q7',
      section: '三、健康状态判断选择题',
      question: '"健康"状态的正确判断标准是？',
      options: [
        'A. 身体各系统功能正常、心理良好、适应社会',
        'B. 处于健康与疾病中间状态，有轻微不适但无疾病诊断标准',
        'C. 已处疾病或健康严重受损状态',
        'D. 仅身体功能正常即可'
      ],
      correct: 'A',
      explanation: '健康状态是指身体各系统功能正常、心理良好、适应社会的综合状态'
    },
    {
      id: 'q8',
      section: '三、健康状态判断选择题',
      question: '"亚健康"状态的正确判断标准是？',
      options: [
        'A. 身体各系统功能正常、心理良好、适应社会',
        'B. 处于健康与疾病中间状态，有轻微不适但无疾病诊断标准',
        'C. 已处疾病或健康严重受损状态',
        'D. 完全没有任何不适症状'
      ],
      correct: 'B',
      explanation: '亚健康是指处于健康与疾病中间状态，有轻微不适但无疾病诊断标准'
    },
    {
      id: 'q9',
      section: '三、健康状态判断选择题',
      question: '"非健康"状态的正确判断标准是？',
      options: [
        'A. 身体各系统功能正常、心理良好、适应社会',
        'B. 处于健康与疾病中间状态，有轻微不适但无疾病诊断标准',
        'C. 已处疾病或健康严重受损状态',
        'D. 仅有轻微的不适感'
      ],
      correct: 'C',
      explanation: '非健康状态是指已处疾病或健康严重受损的状态'
    },

    // 第四部分：管理流程排序选择题（原排序题）
    {
      id: 'q10',
      section: '四、管理流程排序选择题',
      question: '健康管理基本流程的正确顺序是？',
      options: [
        'A. 健康评估 → 制定健康计划 → 健康监测和跟踪',
        'B. 制定健康计划 → 健康评估 → 健康监测和跟踪',
        'C. 健康监测和跟踪 → 健康评估 → 制定健康计划',
        'D. 健康评估 → 健康监测和跟踪 → 制定健康计划'
      ],
      correct: 'A',
      explanation: '健康管理基本流程的正确顺序是：健康评估 → 制定健康计划 → 健康监测和跟踪'
    }
  ];

  // 按部分分组题目
  const groupedQuestions = allQuestions.reduce((acc, question) => {
    const section = question.section;
    if (!acc[section]) {
      acc[section] = [];
    }
    acc[section].push(question);
    return acc;
  }, {} as { [key: string]: typeof allQuestions });

  const handleAnswerSelect = (questionId: string, answer: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answer
    });
  };

  const handleSubmit = () => {
    let correctCount = 0;

    allQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correct) {
        correctCount++;
      }
    });

    const totalScore = Math.round((correctCount / allQuestions.length) * 100);
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
              <p className="text-gray-600 mt-1">检验学习成果，巩固知识要点（共{allQuestions.length}题，每题{Math.round(100 / allQuestions.length)}分）</p>
            </div>
          </div>

          {showResults && (
            <div className="text-center">
              <div className={`text-3xl font-bold ${
                score >= 80 ? 'text-emerald-600' :
                score >= 60 ? 'text-yellow-600' : 'text-red-600'
              }`}>{score}分</div>
              <p className="text-sm text-gray-600">测试得分</p>
            </div>
          )}
        </div>
      </div>

      {/* 选择题部分 */}
      {Object.entries(groupedQuestions).map(([section, questions], sectionIndex) => (
        <section key={section} className="mb-12">
          <div className="liquid-card p-8">
            <h2 className="text-xl font-bold mb-6 text-gray-800">{section}</h2>

            <div className="space-y-6">
              {questions.map((q, index) => {
                const questionNumber = allQuestions.findIndex(aq => aq.id === q.id) + 1;
                return (
                  <div key={q.id} className="health-card">
                    <div className="mb-3">
                      <span className="font-semibold text-gray-800">
                        {questionNumber}. {q.question}
                      </span>
                    </div>

                    <div className="space-y-2">
                      {q.options.map((option) => (
                        <label
                          key={option}
                          className={`flex items-center cursor-pointer p-3 rounded-lg transition-all ${
                            showResults
                              ? option[0] === q.correct
                                ? 'bg-emerald-50 border-2 border-emerald-500'
                                : selectedAnswers[q.id] === option[0] && option[0] !== q.correct
                                ? 'bg-red-50 border-2 border-red-500'
                                : 'bg-gray-50 border-2 border-gray-200'
                              : 'hover:bg-emerald-50 border-2 border-gray-200 hover:border-emerald-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name={q.id}
                            value={option[0]}
                            checked={selectedAnswers[q.id] === option[0]}
                            onChange={(e) => handleAnswerSelect(q.id, e.target.value)}
                            className="mr-3 text-emerald-500 w-4 h-4"
                            disabled={showResults}
                          />
                          <span className={`flex-1 ${
                            showResults && option[0] === q.correct
                              ? 'text-emerald-700 font-medium'
                              : showResults && selectedAnswers[q.id] === option[0] && option[0] !== q.correct
                              ? 'text-red-600'
                              : 'text-gray-700'
                          }`}>
                            {option}
                          </span>
                          {showResults && option[0] === q.correct && (
                            <CheckCircle className="w-5 h-5 text-emerald-500 ml-2" />
                          )}
                          {showResults && selectedAnswers[q.id] === option[0] && option[0] !== q.correct && (
                            <XCircle className="w-5 h-5 text-red-500 ml-2" />
                          )}
                        </label>
                      ))}
                    </div>

                    {showResults && (
                      <div className={`mt-3 p-3 rounded-lg ${
                        selectedAnswers[q.id] === q.correct
                          ? 'bg-emerald-50 border border-emerald-200'
                          : 'bg-blue-50 border border-blue-200'
                      }`}>
                        <p className={`text-sm ${
                          selectedAnswers[q.id] === q.correct
                            ? 'text-emerald-700'
                            : 'text-blue-700'
                        }`}>
                          <span className="font-medium">
                            {selectedAnswers[q.id] === q.correct ? '✓ 回答正确！' : '✗ 回答错误。'}
                          </span>
                          <span className="ml-2">解析：{q.explanation}</span>
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* 操作按钮 */}
      <div className="flex justify-center gap-4 mb-8">
        {!showResults ? (
          <button
            onClick={handleSubmit}
            className="health-btn flex items-center px-8 py-3 text-lg"
            disabled={Object.keys(selectedAnswers).length < allQuestions.length}
          >
            <Award className="w-6 h-6 mr-2" />
            提交答案 ({Object.keys(selectedAnswers).length}/{allQuestions.length})
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="health-btn flex items-center px-8 py-3 text-lg"
          >
            <RefreshCw className="w-6 h-6 mr-2" />
            重新测试
          </button>
        )}
      </div>

      {/* 答题提示 */}
      {!showResults && Object.keys(selectedAnswers).length < allQuestions.length && (
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500">
            还有 {allQuestions.length - Object.keys(selectedAnswers).length} 题未作答，请完成所有题目后提交
          </p>
        </div>
      )}

      {/* 测试结果详情 */}
      {showResults && (
        <div className="liquid-card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">测试结果</h2>

          <div className={`p-6 rounded-lg mb-6 text-center ${
            score >= 80 ? 'bg-emerald-50 border-2 border-emerald-200' :
            score >= 60 ? 'bg-yellow-50 border-2 border-yellow-200' :
            'bg-red-50 border-2 border-red-200'
          }`}>
            <div className={`text-5xl font-bold mb-4 ${
              score >= 80 ? 'text-emerald-600' :
              score >= 60 ? 'text-yellow-600' : 'text-red-600'
            }`}>
              {score}分
            </div>
            <div className="text-lg text-gray-700 mb-4">
              答对 {allQuestions.filter(q => selectedAnswers[q.id] === q.correct).length} 题，共 {allQuestions.length} 题
            </div>
            <h3 className={`text-xl font-semibold mb-3 ${
              score >= 80 ? 'text-emerald-700' :
              score >= 60 ? 'text-yellow-700' : 'text-red-700'
            }`}>
              {score >= 80 ? '🎉 优秀！' :
               score >= 60 ? '👍 良好' : '📚 需要加强'}
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
              {score >= 80 ?
                '恭喜您！您已经很好地掌握了健康状态分类与评估的核心知识，可以进入下一阶段的学习。' :
                score >= 60 ?
                '您对健康管理基础知识有一定掌握，建议复习健康状态分类标准和评估流程等内容。' :
                '建议您重新学习相关章节，特别关注健康状态的判断标准、评估维度和管理流程。'
              }
            </p>
          </div>

          {/* 错题统计 */}
          {allQuestions.filter(q => selectedAnswers[q.id] !== q.correct).length > 0 && (
            <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-700 mb-2">
                错题回顾（共 {allQuestions.filter(q => selectedAnswers[q.id] !== q.correct).length} 题）
              </h4>
              <p className="text-sm text-red-600">
                请重点复习上述标记为错误的题目，加深对相关知识点的理解。
              </p>
            </div>
          )}
        </div>
      )}

      {/* 底部导航按钮 */}
      <div className="mt-12 flex justify-between items-center">
        <Link to="/course/management-process">
          <button className="health-btn flex items-center">
            <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
            返回上一章
          </button>
        </Link>
        <Link to="/">
          <button className="health-btn flex items-center">
            返回首页
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseTestPage;
